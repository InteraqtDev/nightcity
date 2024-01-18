import { Database, QueryExecResult } from '@jlongster/sql.js';
export declare type ClientConversation = {
    [key: string]: any;
};
export declare function localConversations(db: Database): QueryExecResult[];
export declare function getConversationByUserID(db: Database, userID: string): QueryExecResult[];
export declare function getAllConversationList(db: Database): QueryExecResult[];
export declare function getAllConversationListToSync(db: Database): QueryExecResult[];
export declare function getAllSingleConversationIDList(db: Database): QueryExecResult[];
export declare function getAllConversationIDList(db: Database): QueryExecResult[];
export declare function getHiddenConversationList(db: Database): QueryExecResult[];
export declare function getConversationListSplit(db: Database, offset: number, count: number): QueryExecResult[];
export declare function getConversation(db: Database, conversationID: string): QueryExecResult[];
export declare function getMultipleConversation(db: Database, conversationIDList: string[]): QueryExecResult[];
export declare function updateColumnsConversation(db: Database, conversationID: string, conversation: ClientConversation): QueryExecResult[];
export declare function incrConversationUnreadCount(db: Database, conversationID: string): QueryExecResult[];
export declare function decrConversationUnreadCount(db: Database, conversationID: string, count: number): QueryExecResult[];
export declare function batchInsertConversationList(db: Database, conversationList: ClientConversation[]): QueryExecResult[];
export declare function insertConversation(db: Database, localConversation: ClientConversation): QueryExecResult[];
export declare function updateConversation(db: Database, localConversation: ClientConversation): QueryExecResult[];
export declare function deleteConversation(db: Database, conversationID: string): QueryExecResult[];
export declare function conversationIfExists(db: Database, conversationID: string): QueryExecResult[];
export declare function resetConversation(db: Database, conversationID: string): QueryExecResult[];
export declare function resetAllConversation(db: Database): QueryExecResult[];
export declare function clearConversation(db: Database, conversationID: string): QueryExecResult[];
export declare function clearAllConversation(db: Database): QueryExecResult[];
export declare function setConversationDraft(db: Database, conversationID: string, draftText: string): QueryExecResult[];
export declare function removeConversationDraft(db: Database, conversationID: string, draftText: string): QueryExecResult[];
export declare function unPinConversation(db: Database, conversationID: string, isPinned: number): QueryExecResult[];
export declare function getTotalUnreadMsgCount(db: Database): QueryExecResult[];
export declare function setMultipleConversationRecvMsgOpt(db: Database, conversationIDList: string[], opt: number): QueryExecResult[];
export declare function getAllConversations(db: Database): QueryExecResult[];
export declare function searchConversations(db: Database, keyword: string): QueryExecResult[];
