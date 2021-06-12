<template>
	<div class="home">name: {{ getName }}</div>
</template>

<script lang="ts">
import { UserModule } from "@/store/modules/user";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
	get getName() {
		return UserModule.name;
	}
}
</script>
