Java.perform(function () {
	var MiniappService = Java.use("com.ss.android.ugc.aweme.miniapp.MiniAppService");
	MiniappService.initialize.implementation = function ( application, builder ) {
		console.log("Called com.ss.android.ugc.aweme.miniapp.MiniAppService.initialize()");
		return this.initialize(application, builder);
	}
	MiniappService.inst.implementation = function () {
		console.log("Called com.ss.android.ugc.aweme.miniapp.MiniAppService.inst()");
		return this.inst();
	}
});

