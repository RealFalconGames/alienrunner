gdjs.StartCode = {};
gdjs.StartCode.GDText1Objects1= [];
gdjs.StartCode.GDText1Objects2= [];
gdjs.StartCode.GDText2Objects1= [];
gdjs.StartCode.GDText2Objects2= [];

gdjs.StartCode.conditionTrue_0 = {val:false};
gdjs.StartCode.condition0IsTrue_0 = {val:false};
gdjs.StartCode.condition1IsTrue_0 = {val:false};


gdjs.StartCode.eventsList0 = function(runtimeScene) {

{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if (gdjs.StartCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "L1", false);
}}

}


};

gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDText1Objects1.length = 0;
gdjs.StartCode.GDText1Objects2.length = 0;
gdjs.StartCode.GDText2Objects1.length = 0;
gdjs.StartCode.GDText2Objects2.length = 0;

gdjs.StartCode.eventsList0(runtimeScene);
return;

}

gdjs['StartCode'] = gdjs.StartCode;
