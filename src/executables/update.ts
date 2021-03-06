import {CreateCRUDExecutable} from "@skazska/abstract-service-model"
import {IClientKey, IClientProps} from "../model";
import {IClientExecutableConfig} from "../executables";
import {ClientStorage} from "../aws/storage";

const defaultStorage = ClientStorage.getInstance('clients');

//TODO

export class ClientUpdateExecutable extends CreateCRUDExecutable<IClientKey, IClientProps> {
    constructor(props :IClientExecutableConfig) {
        props.realm = 'clients';
        props.operation = 'update';
        super(props);
    }

    static getInstance(storage? :ClientStorage) {
        return new ClientUpdateExecutable({storage: storage || defaultStorage});
    }
}
