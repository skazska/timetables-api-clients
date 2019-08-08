import {AwsApiGwProxyIO, IAwsApiGwProxyInput} from "@skazska/abstract-aws-service-model"
import {AbstractAuth, IAuthTokenResult, GenericResult, IError, IModel, success} from "@skazska/abstract-service-model";
import {IClientKey} from "../../model";
import {ClientReadExecutable} from "../../executables/read";
import {APIGatewayProxyResult} from "aws-lambda";
import {ClientModelIOFactory} from "../i-o";

const ioModelFactory = new ClientModelIOFactory();

export class ReadIO extends AwsApiGwProxyIO<IClientKey,IModel> {
    constructor(executable: ClientReadExecutable, authenticator?: AbstractAuth) {
        super(executable, authenticator, {successStatus: 200});
    };

    protected authTokens(input: IAwsApiGwProxyInput): IAuthTokenResult {
        return success(input.event.headers['x-auth-token']);
    }

    protected data(inputs: IAwsApiGwProxyInput): GenericResult<IClientKey, IError> {
        return success({id: inputs.event.pathParameters.id});
    }

    protected success(result: IModel): APIGatewayProxyResult {
        const data = ioModelFactory.data(result);
        return super.success(data);
    }

    static getInstance(executable, authenticator) {
        return new ReadIO(executable, authenticator)
    }
}
