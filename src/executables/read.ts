import {ReadCRUDExecutable} from "@skazska/abstract-service-model"
import {IClientKey, IClientProps} from "../model";
import {IClientExecutableConfig} from "../executables";
import {ClientStorage} from "../aws/storage";

const defaultStorage = ClientStorage.getInstance('clients');

export class ClientReadExecutable extends ReadCRUDExecutable<IClientKey, IClientProps> {
    constructor(props :IClientExecutableConfig) {
        props.realm = props.realm || 'clients';
        props.operation = props.operation || 'read';
        super(props);
    }
    static getInstance(operation?: string, storage? :ClientStorage) {
        return new ClientReadExecutable({operation: operation, storage: storage || defaultStorage});
    }
}
