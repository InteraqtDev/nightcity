import {sendRequestRelation, userTotalUnhandledRequest} from "./requestEntity.js";
import {friendRelation} from "./createFriendRelationActivity.js";
import {UserEntity} from "./user.js";
import {
    Property,
    RelationBasedEvery,
    RelationBasedAny,
    RelationCount,
    Interaction,
    GetAction,
    DataAttributive, InteractionEventArgs,
    boolExpToDataAttributives,
    BoolExp
} from "@interaqt/runtime";
import {postEntity} from "./post.js";

UserEntity.properties.push(Property.create({
    name: 'totalUnhandledRequest',
    type: 'number',
    collection: false,
    computedData: userTotalUnhandledRequest
}))

UserEntity.properties.push(Property.create({
    name: 'everySendRequestHandled',
    type: 'boolean',
    collection: false,
    computedData: RelationBasedEvery.create({
        relation: sendRequestRelation,
        relationDirection: 'target',
        match: (request) => request.handled
    })
}))

UserEntity.properties.push(Property.create({
    name: 'anySendRequestHandled',
    type: 'boolean',
    collection: false,
    computedData: RelationBasedAny.create({
        relation: sendRequestRelation,
        relationDirection: 'target',
        match: (request) => request.handled
    })
}))

// 计算 total friend count
const userTotalFriendCount = RelationCount.create({
    relation: friendRelation,
    relationDirection: 'source',
    match: () => true
})

UserEntity.properties.push(Property.create({
    name: 'totalFriendCount',
    type: 'number',
    collection: false,
    computedData: userTotalFriendCount
}))


const MyFriend = DataAttributive.create({
    name: 'MyFriend',
    content: (event: InteractionEventArgs) => {
        return {
            key: 'friends.id',
            value: ['=', event.user.id]
        }
    }
})

export const getFriendsInteraction = Interaction.create({
    name: 'getFriends',
    action: GetAction,
    data: UserEntity,
    dataAttributives: MyFriend,
})