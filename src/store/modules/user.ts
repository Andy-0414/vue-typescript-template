import { Action, getModule, Module, Mutation, VuexModule } from "vuex-module-decorators";

import store from "@/store";

export interface IUserState {
	name: string;
}

@Module({ dynamic: true, store, name: "User" })
class User extends VuexModule implements IUserState {
	name: string = "UserName";

	@Mutation
	setUserName(name: string) {
		this.name = name;
	}

	@Action
	async fetchAPI() {
		let apiResult = await new Promise((resolve, reject) => {
			setTimeout(resolve, 1000);
		});
		return apiResult;
	}
}

export const UserModule = getModule(User, store);
