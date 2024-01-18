import { ClientConversation } from '../../sqls';
export declare function getAllConversationList(): Promise<string>;
export declare function getAllConversationListToSync(): Promise<string>;
export declare function getAllSingleConversationIDList(): Promise<string>;
export declare function getAllConversationIDList(): Promise<string>;
export declare function getHiddenConversationList(): Promise<string>;
export declare function getConversation(conversationID: string): Promise<string>;
export declare function getMultipleConversation(conversationIDList: string): Promise<string>;
export declare function updateColumnsConversation(conversationID: string, conversation: ClientConversation | string): Promise<string>;
export declare function decrConversationUnreadCount(conversationID: string, count: number): Promise<string>;
export declare function batchInsertConversationList(conversationListStr: string): Promise<string>;
export declare function insertConversation(conversationStr: string): Promise<string>;
export declare function getTotalUnreadMsgCount(): Promise<string>;
export declare function getConversationByUserID(userID: string): Promise<string>;
export declare function getConversationListSplit(offset: number, count: number): Promise<string>;
export declare function deleteConversation(conversationID: string): Promise<string>;
export declare function updateConversation(conversationStr: string): Promise<string>;
export declare function batchUpdateConversationList(conversationListStr: string): Promise<string>;
export declare function conversationIfExists(conversationID: string): Promise<string>;
export declare function resetConversation(conversationID: string): Promise<string>;
export declare function resetAllConversation(): Promise<string>;
export declare function clearConversation(conversationID: string): Promise<string>;
export declare function clearAllConversation(): Promise<string>;
export declare function setConversationDraft(conversationID: string, draftText: string): Promise<string>;
export declare function removeConversationDraft(conversationID: string, draftText: string): Promise<string>;
export declare function unPinConversation(conversationID: string, isPinned: number): Promise<string>;
export declare function incrConversationUnreadCount(conversationID: string): Promise<string>;
export declare function setMultipleConversationRecvMsgOpt(conversationIDListStr: string, opt: number): Promise<string>;
export declare function getAllConversations(): Promise<string>;
export declare function searchConversations(keyword: string): Promise<string>;
