import {sendRequestRelation, userTotalUnhandledRequest} from "./requestEntity.js";
import {friendRelation} from "./createFriendRelationActivity.js";
import {UserEntity} from "./user.js";
import {
    Action,
    Activity,
    ActivityGroup,
    BoolAtomData,
    createUserRoleAttributive,
    Entity,
    Interaction,
    Payload,
    PayloadItem,
    Relation,
    RelationStateMachine,
    RelationStateNode,
    RelationStateTransfer,
    Transfer,
    Attributives,
    Attributive,
    Property,
    RelationBasedEvery,
    RelationBasedAny,
    RelationCount
} from "@interaqt/runtime";

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