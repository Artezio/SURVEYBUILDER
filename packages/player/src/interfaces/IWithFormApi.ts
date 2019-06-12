import { FormApi, FormState } from "informed";

export interface IWithFormApi {
    formApi: FormApi<FormState>
}

export default IWithFormApi;