gdjs.L1Code = {};
gdjs.L1Code.forEachCount0_3 = 0;

gdjs.L1Code.forEachCount1_3 = 0;

gdjs.L1Code.forEachIndex3 = 0;

gdjs.L1Code.forEachObjects3 = [];

gdjs.L1Code.forEachTotalCount3 = 0;

gdjs.L1Code.GDPlayerObjects1= [];
gdjs.L1Code.GDPlayerObjects2= [];
gdjs.L1Code.GDPlayerObjects3= [];
gdjs.L1Code.GDPlatformObjects1= [];
gdjs.L1Code.GDPlatformObjects2= [];
gdjs.L1Code.GDPlatformObjects3= [];
gdjs.L1Code.GDJumpthruObjects1= [];
gdjs.L1Code.GDJumpthruObjects2= [];
gdjs.L1Code.GDJumpthruObjects3= [];
gdjs.L1Code.GDTiledGrassPlatformObjects1= [];
gdjs.L1Code.GDTiledGrassPlatformObjects2= [];
gdjs.L1Code.GDTiledGrassPlatformObjects3= [];
gdjs.L1Code.GDTiledCastlePlatformObjects1= [];
gdjs.L1Code.GDTiledCastlePlatformObjects2= [];
gdjs.L1Code.GDTiledCastlePlatformObjects3= [];
gdjs.L1Code.GDMovingPlatformObjects1= [];
gdjs.L1Code.GDMovingPlatformObjects2= [];
gdjs.L1Code.GDMovingPlatformObjects3= [];
gdjs.L1Code.GDLadderObjects1= [];
gdjs.L1Code.GDLadderObjects2= [];
gdjs.L1Code.GDLadderObjects3= [];
gdjs.L1Code.GDPlayerHitBoxObjects1= [];
gdjs.L1Code.GDPlayerHitBoxObjects2= [];
gdjs.L1Code.GDPlayerHitBoxObjects3= [];
gdjs.L1Code.GDSlimeWalkObjects1= [];
gdjs.L1Code.GDSlimeWalkObjects2= [];
gdjs.L1Code.GDSlimeWalkObjects3= [];
gdjs.L1Code.GDFlyObjects1= [];
gdjs.L1Code.GDFlyObjects2= [];
gdjs.L1Code.GDFlyObjects3= [];
gdjs.L1Code.GDScoreObjects1= [];
gdjs.L1Code.GDScoreObjects2= [];
gdjs.L1Code.GDScoreObjects3= [];
gdjs.L1Code.GDCoinObjects1= [];
gdjs.L1Code.GDCoinObjects2= [];
gdjs.L1Code.GDCoinObjects3= [];
gdjs.L1Code.GDCoinIconObjects1= [];
gdjs.L1Code.GDCoinIconObjects2= [];
gdjs.L1Code.GDCoinIconObjects3= [];
gdjs.L1Code.GDLeftButtonObjects1= [];
gdjs.L1Code.GDLeftButtonObjects2= [];
gdjs.L1Code.GDLeftButtonObjects3= [];
gdjs.L1Code.GDRightButtonObjects1= [];
gdjs.L1Code.GDRightButtonObjects2= [];
gdjs.L1Code.GDRightButtonObjects3= [];
gdjs.L1Code.GDJumpButtonObjects1= [];
gdjs.L1Code.GDJumpButtonObjects2= [];
gdjs.L1Code.GDJumpButtonObjects3= [];
gdjs.L1Code.GDArrowButtonsBgObjects1= [];
gdjs.L1Code.GDArrowButtonsBgObjects2= [];
gdjs.L1Code.GDArrowButtonsBgObjects3= [];
gdjs.L1Code.GDTopButtonObjects1= [];
gdjs.L1Code.GDTopButtonObjects2= [];
gdjs.L1Code.GDTopButtonObjects3= [];
gdjs.L1Code.GDBottomButtonObjects1= [];
gdjs.L1Code.GDBottomButtonObjects2= [];
gdjs.L1Code.GDBottomButtonObjects3= [];
gdjs.L1Code.GDFadeInObjects1= [];
gdjs.L1Code.GDFadeInObjects2= [];
gdjs.L1Code.GDFadeInObjects3= [];

gdjs.L1Code.conditionTrue_0 = {val:false};
gdjs.L1Code.condition0IsTrue_0 = {val:false};
gdjs.L1Code.condition1IsTrue_0 = {val:false};
gdjs.L1Code.condition2IsTrue_0 = {val:false};
gdjs.L1Code.conditionTrue_1 = {val:false};
gdjs.L1Code.condition0IsTrue_1 = {val:false};
gdjs.L1Code.condition1IsTrue_1 = {val:false};
gdjs.L1Code.condition2IsTrue_1 = {val:false};


gdjs.L1Code.eventsList0 = function(runtimeScene) {

{


gdjs.L1Code.condition0IsTrue_0.val = false;
{
{gdjs.L1Code.conditionTrue_1 = gdjs.L1Code.condition0IsTrue_0;
gdjs.L1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7826892);
}
}if (gdjs.L1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "https://resources.gdevelop-app.com/examples/platformer/jump.wav", false, 100, 1);
}}

}


};gdjs.L1Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.L1Code.GDPlayerHitBoxObjects1, gdjs.L1Code.GDPlayerHitBoxObjects2);


gdjs.L1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.L1Code.GDPlayerHitBoxObjects2.length;i<l;++i) {
    if ( !(gdjs.L1Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.L1Code.condition0IsTrue_0.val = true;
        gdjs.L1Code.GDPlayerHitBoxObjects2[k] = gdjs.L1Code.GDPlayerHitBoxObjects2[i];
        ++k;
    }
}
gdjs.L1Code.GDPlayerHitBoxObjects2.length = k;}if (gdjs.L1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.L1Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.L1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.L1Code.GDPlayerObjects2[i].setAnimationName("Idle");
}
}}

}


{

/* Reuse gdjs.L1Code.GDPlayerHitBoxObjects1 */

gdjs.L1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.L1Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.L1Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.L1Code.condition0IsTrue_0.val = true;
        gdjs.L1Code.GDPlayerHitBoxObjects1[k] = gdjs.L1Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.L1Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs.L1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.L1Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.L1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.L1Code.GDPlayerObjects1[i].setAnimationName("Running");
}
}}

}


};gdjs.L1Code.mapOfGDgdjs_46L1Code_46GDPlayerHitBoxObjects1Objects = Hashtable.newFrom({"PlayerHitBox": gdjs.L1Code.GDPlayerHitBoxObjects1});gdjs.L1Code.mapOfGDgdjs_46L1Code_46GDSlimeWalkObjects1ObjectsGDgdjs_46L1Code_46GDFlyObjects1Objects = Hashtable.newFrom({"SlimeWalk": gdjs.L1Code.GDSlimeWalkObjects1, "Fly": gdjs.L1Code.GDFlyObjects1});gdjs.L1Code.eventsList2 = function(runtimeScene) {

};gdjs.L1Code.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.L1Code.GDFlyObjects2 */
/* Reuse gdjs.L1Code.GDSlimeWalkObjects2 */

gdjs.L1Code.forEachTotalCount3 = 0;
gdjs.L1Code.forEachObjects3.length = 0;
gdjs.L1Code.forEachCount0_3 = gdjs.L1Code.GDSlimeWalkObjects2.length;
gdjs.L1Code.forEachTotalCount3 += gdjs.L1Code.forEachCount0_3;
gdjs.L1Code.forEachObjects3.push.apply(gdjs.L1Code.forEachObjects3,gdjs.L1Code.GDSlimeWalkObjects2);
gdjs.L1Code.forEachCount1_3 = gdjs.L1Code.GDFlyObjects2.length;
gdjs.L1Code.forEachTotalCount3 += gdjs.L1Code.forEachCount1_3;
gdjs.L1Code.forEachObjects3.push.apply(gdjs.L1Code.forEachObjects3,gdjs.L1Code.GDFlyObjects2);
for(gdjs.L1Code.forEachIndex3 = 0;gdjs.L1Code.forEachIndex3 < gdjs.L1Code.forEachTotalCount3;++gdjs.L1Code.forEachIndex3) {
gdjs.L1Code.GDFlyObjects3.length = 0;

gdjs.L1Code.GDSlimeWalkObjects3.length = 0;


if (gdjs.L1Code.forEachIndex3 < gdjs.L1Code.forEachCount0_3) {
    gdjs.L1Code.GDSlimeWalkObjects3.push(gdjs.L1Code.forEachObjects3[gdjs.L1Code.forEachIndex3]);
}
else if (gdjs.L1Code.forEachIndex3 < gdjs.L1Code.forEachCount0_3+gdjs.L1Code.forEachCount1_3) {
    gdjs.L1Code.GDFlyObjects3.push(gdjs.L1Code.forEachObjects3[gdjs.L1Code.forEachIndex3]);
}
if (true) {
{runtimeScene.getVariables().getFromIndex(0).add(50);
}}
}

}


};gdjs.L1Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.L1Code.GDPlayerHitBoxObjects1, gdjs.L1Code.GDPlayerHitBoxObjects2);


gdjs.L1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.L1Code.GDPlayerHitBoxObjects2.length;i<l;++i) {
    if ( gdjs.L1Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.L1Code.condition0IsTrue_0.val = true;
        gdjs.L1Code.GDPlayerHitBoxObjects2[k] = gdjs.L1Code.GDPlayerHitBoxObjects2[i];
        ++k;
    }
}
gdjs.L1Code.GDPlayerHitBoxObjects2.length = k;}if (gdjs.L1Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.L1Code.GDFlyObjects1, gdjs.L1Code.GDFlyObjects2);

/* Reuse gdjs.L1Code.GDPlayerHitBoxObjects2 */
gdjs.copyArray(gdjs.L1Code.GDSlimeWalkObjects1, gdjs.L1Code.GDSlimeWalkObjects2);

{for(var i = 0, len = gdjs.L1Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.L1Code.GDSlimeWalkObjects2[i].setAnimation(1);
}
for(var i = 0, len = gdjs.L1Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.L1Code.GDFlyObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.L1Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.L1Code.GDSlimeWalkObjects2[i].activateBehavior("PlatformerObject", true);
}
for(var i = 0, len = gdjs.L1Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.L1Code.GDFlyObjects2[i].activateBehavior("PlatformerObject", true);
}
}{for(var i = 0, len = gdjs.L1Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.L1Code.GDSlimeWalkObjects2[i].getBehavior("PlatformerObject").setGravity(1500);
}
for(var i = 0, len = gdjs.L1Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.L1Code.GDFlyObjects2[i].getBehavior("PlatformerObject").setGravity(1500);
}
}{for(var i = 0, len = gdjs.L1Code.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.L1Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.L1Code.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.L1Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "https://resources.gdevelop-app.com/examples/platformer/jump.wav", false, 100, 1);
}
{ //Subevents
gdjs.L1Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.L1Code.GDPlayerHitBoxObjects1 */

gdjs.L1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.L1Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( !(gdjs.L1Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isFalling()) ) {
        gdjs.L1Code.condition0IsTrue_0.val = true;
        gdjs.L1Code.GDPlayerHitBoxObjects1[k] = gdjs.L1Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.L1Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs.L1Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}}

}


};gdjs.L1Code.eventsList5 = function(runtimeScene) {

{



}


{


{
gdjs.copyArray(gdjs.L1Code.GDFlyObjects1, gdjs.L1Code.GDFlyObjects2);

gdjs.copyArray(gdjs.L1Code.GDSlimeWalkObjects1, gdjs.L1Code.GDSlimeWalkObjects2);

{for(var i = 0, len = gdjs.L1Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.L1Code.GDSlimeWalkObjects2[i].returnVariable(gdjs.L1Code.GDSlimeWalkObjects2[i].getVariables().get("GoingLeft")).setNumber(1);
}
for(var i = 0, len = gdjs.L1Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.L1Code.GDFlyObjects2[i].returnVariable(gdjs.L1Code.GDFlyObjects2[i].getVariables().get("GoingLeft")).setNumber(1);
}
}}

}


{


{
gdjs.copyArray(gdjs.L1Code.GDFlyObjects1, gdjs.L1Code.GDFlyObjects2);

gdjs.copyArray(gdjs.L1Code.GDSlimeWalkObjects1, gdjs.L1Code.GDSlimeWalkObjects2);

{for(var i = 0, len = gdjs.L1Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.L1Code.GDSlimeWalkObjects2[i].returnVariable(gdjs.L1Code.GDSlimeWalkObjects2[i].getVariables().get("GoingLeft")).setNumber(0);
}
for(var i = 0, len = gdjs.L1Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.L1Code.GDFlyObjects2[i].returnVariable(gdjs.L1Code.GDFlyObjects2[i].getVariables().get("GoingLeft")).setNumber(0);
}
}}

}


{

gdjs.copyArray(gdjs.L1Code.GDFlyObjects1, gdjs.L1Code.GDFlyObjects2);

gdjs.copyArray(gdjs.L1Code.GDSlimeWalkObjects1, gdjs.L1Code.GDSlimeWalkObjects2);


gdjs.L1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.L1Code.GDSlimeWalkObjects2.length;i<l;++i) {
    if ( gdjs.L1Code.GDSlimeWalkObjects2[i].getVariableNumber(gdjs.L1Code.GDSlimeWalkObjects2[i].getVariables().get("GoingLeft")) == 1 ) {
        gdjs.L1Code.condition0IsTrue_0.val = true;
        gdjs.L1Code.GDSlimeWalkObjects2[k] = gdjs.L1Code.GDSlimeWalkObjects2[i];
        ++k;
    }
}
gdjs.L1Code.GDSlimeWalkObjects2.length = k;for(var i = 0, k = 0, l = gdjs.L1Code.GDFlyObjects2.length;i<l;++i) {
    if ( gdjs.L1Code.GDFlyObjects2[i].getVariableNumber(gdjs.L1Code.GDFlyObjects2[i].getVariables().get("GoingLeft")) == 1 ) {
        gdjs.L1Code.condition0IsTrue_0.val = true;
        gdjs.L1Code.GDFlyObjects2[k] = gdjs.L1Code.GDFlyObjects2[i];
        ++k;
    }
}
gdjs.L1Code.GDFlyObjects2.length = k;}if (gdjs.L1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.L1Code.GDFlyObjects2 */
/* Reuse gdjs.L1Code.GDSlimeWalkObjects2 */
{for(var i = 0, len = gdjs.L1Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.L1Code.GDFlyObjects2[i].addForce(-(300), 0, 0);
}
}{for(var i = 0, len = gdjs.L1Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.L1Code.GDSlimeWalkObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
for(var i = 0, len = gdjs.L1Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.L1Code.GDFlyObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.L1Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.L1Code.GDSlimeWalkObjects2[i].flipX(false);
}
for(var i = 0, len = gdjs.L1Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.L1Code.GDFlyObjects2[i].flipX(false);
}
}}

}


{

gdjs.copyArray(gdjs.L1Code.GDFlyObjects1, gdjs.L1Code.GDFlyObjects2);

gdjs.copyArray(gdjs.L1Code.GDSlimeWalkObjects1, gdjs.L1Code.GDSlimeWalkObjects2);


gdjs.L1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.L1Code.GDSlimeWalkObjects2.length;i<l;++i) {
    if ( gdjs.L1Code.GDSlimeWalkObjects2[i].getVariableNumber(gdjs.L1Code.GDSlimeWalkObjects2[i].getVariables().get("GoingLeft")) == 0 ) {
        gdjs.L1Code.condition0IsTrue_0.val = true;
        gdjs.L1Code.GDSlimeWalkObjects2[k] = gdjs.L1Code.GDSlimeWalkObjects2[i];
        ++k;
    }
}
gdjs.L1Code.GDSlimeWalkObjects2.length = k;for(var i = 0, k = 0, l = gdjs.L1Code.GDFlyObjects2.length;i<l;++i) {
    if ( gdjs.L1Code.GDFlyObjects2[i].getVariableNumber(gdjs.L1Code.GDFlyObjects2[i].getVariables().get("GoingLeft")) == 0 ) {
        gdjs.L1Code.condition0IsTrue_0.val = true;
        gdjs.L1Code.GDFlyObjects2[k] = gdjs.L1Code.GDFlyObjects2[i];
        ++k;
    }
}
gdjs.L1Code.GDFlyObjects2.length = k;}if (gdjs.L1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.L1Code.GDFlyObjects2 */
/* Reuse gdjs.L1Code.GDSlimeWalkObjects2 */
{for(var i = 0, len = gdjs.L1Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.L1Code.GDFlyObjects2[i].addForce(300, 0, 0);
}
}{for(var i = 0, len = gdjs.L1Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.L1Code.GDSlimeWalkObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
for(var i = 0, len = gdjs.L1Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.L1Code.GDFlyObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.L1Code.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.L1Code.GDSlimeWalkObjects2[i].flipX(true);
}
for(var i = 0, len = gdjs.L1Code.GDFlyObjects2.length ;i < len;++i) {
    gdjs.L1Code.GDFlyObjects2[i].flipX(true);
}
}}

}


{



}


{

/* Reuse gdjs.L1Code.GDFlyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.L1Code.GDPlayerHitBoxObjects1);
/* Reuse gdjs.L1Code.GDSlimeWalkObjects1 */

gdjs.L1Code.condition0IsTrue_0.val = false;
{
gdjs.L1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.L1Code.mapOfGDgdjs_46L1Code_46GDPlayerHitBoxObjects1Objects, gdjs.L1Code.mapOfGDgdjs_46L1Code_46GDSlimeWalkObjects1ObjectsGDgdjs_46L1Code_46GDFlyObjects1Objects, false, runtimeScene, false);
}if (gdjs.L1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.L1Code.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.L1Code.mapOfGDgdjs_46L1Code_46GDPlayerHitBoxObjects1Objects = Hashtable.newFrom({"PlayerHitBox": gdjs.L1Code.GDPlayerHitBoxObjects1});gdjs.L1Code.mapOfGDgdjs_46L1Code_46GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.L1Code.GDCoinObjects1});gdjs.L1Code.eventsList6 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.L1Code.GDScoreObjects1);
{for(var i = 0, len = gdjs.L1Code.GDScoreObjects1.length ;i < len;++i) {
    gdjs.L1Code.GDScoreObjects1[i].setString("x " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}}

}


};gdjs.L1Code.mapOfGDgdjs_46L1Code_46GDLeftButtonObjects2Objects = Hashtable.newFrom({"LeftButton": gdjs.L1Code.GDLeftButtonObjects2});gdjs.L1Code.mapOfGDgdjs_46L1Code_46GDRightButtonObjects2Objects = Hashtable.newFrom({"RightButton": gdjs.L1Code.GDRightButtonObjects2});gdjs.L1Code.mapOfGDgdjs_46L1Code_46GDTopButtonObjects2Objects = Hashtable.newFrom({"TopButton": gdjs.L1Code.GDTopButtonObjects2});gdjs.L1Code.mapOfGDgdjs_46L1Code_46GDBottomButtonObjects2Objects = Hashtable.newFrom({"BottomButton": gdjs.L1Code.GDBottomButtonObjects2});gdjs.L1Code.mapOfGDgdjs_46L1Code_46GDJumpButtonObjects1Objects = Hashtable.newFrom({"JumpButton": gdjs.L1Code.GDJumpButtonObjects1});gdjs.L1Code.eventsList7 = function(runtimeScene) {

{


gdjs.L1Code.condition0IsTrue_0.val = false;
{
gdjs.L1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.L1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
}}

}


{

gdjs.copyArray(gdjs.L1Code.GDLeftButtonObjects1, gdjs.L1Code.GDLeftButtonObjects2);


gdjs.L1Code.condition0IsTrue_0.val = false;
{
gdjs.L1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.L1Code.mapOfGDgdjs_46L1Code_46GDLeftButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.L1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.L1Code.GDPlayerHitBoxObjects2);
{for(var i = 0, len = gdjs.L1Code.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.L1Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(gdjs.L1Code.GDRightButtonObjects1, gdjs.L1Code.GDRightButtonObjects2);


gdjs.L1Code.condition0IsTrue_0.val = false;
{
gdjs.L1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.L1Code.mapOfGDgdjs_46L1Code_46GDRightButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.L1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.L1Code.GDPlayerHitBoxObjects2);
{for(var i = 0, len = gdjs.L1Code.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.L1Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(gdjs.L1Code.GDTopButtonObjects1, gdjs.L1Code.GDTopButtonObjects2);


gdjs.L1Code.condition0IsTrue_0.val = false;
{
gdjs.L1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.L1Code.mapOfGDgdjs_46L1Code_46GDTopButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.L1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.L1Code.GDPlayerHitBoxObjects2);
{for(var i = 0, len = gdjs.L1Code.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.L1Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").simulateUpKey();
}
}{for(var i = 0, len = gdjs.L1Code.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.L1Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").simulateLadderKey();
}
}}

}


{

gdjs.copyArray(gdjs.L1Code.GDBottomButtonObjects1, gdjs.L1Code.GDBottomButtonObjects2);


gdjs.L1Code.condition0IsTrue_0.val = false;
{
gdjs.L1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.L1Code.mapOfGDgdjs_46L1Code_46GDBottomButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.L1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.L1Code.GDPlayerHitBoxObjects2);
{for(var i = 0, len = gdjs.L1Code.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.L1Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").simulateDownKey();
}
}}

}


{

/* Reuse gdjs.L1Code.GDJumpButtonObjects1 */

gdjs.L1Code.condition0IsTrue_0.val = false;
{
gdjs.L1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.L1Code.mapOfGDgdjs_46L1Code_46GDJumpButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.L1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.L1Code.GDPlayerHitBoxObjects1);
{for(var i = 0, len = gdjs.L1Code.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.L1Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


};gdjs.L1Code.eventsList8 = function(runtimeScene) {

{


gdjs.L1Code.condition0IsTrue_0.val = false;
{
gdjs.L1Code.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
}if (gdjs.L1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ArrowButtonsBg"), gdjs.L1Code.GDArrowButtonsBgObjects2);
gdjs.copyArray(runtimeScene.getObjects("BottomButton"), gdjs.L1Code.GDBottomButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.L1Code.GDJumpButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("LeftButton"), gdjs.L1Code.GDLeftButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("RightButton"), gdjs.L1Code.GDRightButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("TopButton"), gdjs.L1Code.GDTopButtonObjects2);
{for(var i = 0, len = gdjs.L1Code.GDLeftButtonObjects2.length ;i < len;++i) {
    gdjs.L1Code.GDLeftButtonObjects2[i].hide();
}
for(var i = 0, len = gdjs.L1Code.GDRightButtonObjects2.length ;i < len;++i) {
    gdjs.L1Code.GDRightButtonObjects2[i].hide();
}
for(var i = 0, len = gdjs.L1Code.GDJumpButtonObjects2.length ;i < len;++i) {
    gdjs.L1Code.GDJumpButtonObjects2[i].hide();
}
for(var i = 0, len = gdjs.L1Code.GDArrowButtonsBgObjects2.length ;i < len;++i) {
    gdjs.L1Code.GDArrowButtonsBgObjects2[i].hide();
}
for(var i = 0, len = gdjs.L1Code.GDTopButtonObjects2.length ;i < len;++i) {
    gdjs.L1Code.GDTopButtonObjects2[i].hide();
}
for(var i = 0, len = gdjs.L1Code.GDBottomButtonObjects2.length ;i < len;++i) {
    gdjs.L1Code.GDBottomButtonObjects2[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowButtonsBg"), gdjs.L1Code.GDArrowButtonsBgObjects1);
gdjs.copyArray(runtimeScene.getObjects("BottomButton"), gdjs.L1Code.GDBottomButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.L1Code.GDJumpButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("LeftButton"), gdjs.L1Code.GDLeftButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("RightButton"), gdjs.L1Code.GDRightButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("TopButton"), gdjs.L1Code.GDTopButtonObjects1);

gdjs.L1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.L1Code.GDLeftButtonObjects1.length;i<l;++i) {
    if ( gdjs.L1Code.GDLeftButtonObjects1[i].isVisible() ) {
        gdjs.L1Code.condition0IsTrue_0.val = true;
        gdjs.L1Code.GDLeftButtonObjects1[k] = gdjs.L1Code.GDLeftButtonObjects1[i];
        ++k;
    }
}
gdjs.L1Code.GDLeftButtonObjects1.length = k;for(var i = 0, k = 0, l = gdjs.L1Code.GDRightButtonObjects1.length;i<l;++i) {
    if ( gdjs.L1Code.GDRightButtonObjects1[i].isVisible() ) {
        gdjs.L1Code.condition0IsTrue_0.val = true;
        gdjs.L1Code.GDRightButtonObjects1[k] = gdjs.L1Code.GDRightButtonObjects1[i];
        ++k;
    }
}
gdjs.L1Code.GDRightButtonObjects1.length = k;for(var i = 0, k = 0, l = gdjs.L1Code.GDJumpButtonObjects1.length;i<l;++i) {
    if ( gdjs.L1Code.GDJumpButtonObjects1[i].isVisible() ) {
        gdjs.L1Code.condition0IsTrue_0.val = true;
        gdjs.L1Code.GDJumpButtonObjects1[k] = gdjs.L1Code.GDJumpButtonObjects1[i];
        ++k;
    }
}
gdjs.L1Code.GDJumpButtonObjects1.length = k;for(var i = 0, k = 0, l = gdjs.L1Code.GDArrowButtonsBgObjects1.length;i<l;++i) {
    if ( gdjs.L1Code.GDArrowButtonsBgObjects1[i].isVisible() ) {
        gdjs.L1Code.condition0IsTrue_0.val = true;
        gdjs.L1Code.GDArrowButtonsBgObjects1[k] = gdjs.L1Code.GDArrowButtonsBgObjects1[i];
        ++k;
    }
}
gdjs.L1Code.GDArrowButtonsBgObjects1.length = k;for(var i = 0, k = 0, l = gdjs.L1Code.GDTopButtonObjects1.length;i<l;++i) {
    if ( gdjs.L1Code.GDTopButtonObjects1[i].isVisible() ) {
        gdjs.L1Code.condition0IsTrue_0.val = true;
        gdjs.L1Code.GDTopButtonObjects1[k] = gdjs.L1Code.GDTopButtonObjects1[i];
        ++k;
    }
}
gdjs.L1Code.GDTopButtonObjects1.length = k;for(var i = 0, k = 0, l = gdjs.L1Code.GDBottomButtonObjects1.length;i<l;++i) {
    if ( gdjs.L1Code.GDBottomButtonObjects1[i].isVisible() ) {
        gdjs.L1Code.condition0IsTrue_0.val = true;
        gdjs.L1Code.GDBottomButtonObjects1[k] = gdjs.L1Code.GDBottomButtonObjects1[i];
        ++k;
    }
}
gdjs.L1Code.GDBottomButtonObjects1.length = k;}if (gdjs.L1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.L1Code.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.L1Code.mapOfGDgdjs_46L1Code_46GDFadeInObjects2Objects = Hashtable.newFrom({"FadeIn": gdjs.L1Code.GDFadeInObjects2});gdjs.L1Code.eventsList9 = function(runtimeScene) {

{



}


{


{
gdjs.L1Code.GDFadeInObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.L1Code.mapOfGDgdjs_46L1Code_46GDFadeInObjects2Objects, 0, 0, "GUI");
}{for(var i = 0, len = gdjs.L1Code.GDFadeInObjects2.length ;i < len;++i) {
    gdjs.L1Code.GDFadeInObjects2[i].setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}{for(var i = 0, len = gdjs.L1Code.GDFadeInObjects2.length ;i < len;++i) {
    gdjs.L1Code.GDFadeInObjects2[i].setHeight(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}{for(var i = 0, len = gdjs.L1Code.GDFadeInObjects2.length ;i < len;++i) {
    gdjs.L1Code.GDFadeInObjects2[i].getBehavior("Tween").addObjectOpacityTween("FadeIn", 0, "easeInQuad", 1500, true);
}
}}

}


};gdjs.L1Code.eventsList10 = function(runtimeScene) {

{



}


{


gdjs.L1Code.condition0IsTrue_0.val = false;
{
{gdjs.L1Code.conditionTrue_1 = gdjs.L1Code.condition0IsTrue_0;
gdjs.L1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7853412);
}
}if (gdjs.L1Code.condition0IsTrue_0.val) {
}

}


{



}


{


gdjs.L1Code.condition0IsTrue_0.val = false;
{
gdjs.L1Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 1;
}if (gdjs.L1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.L1Code.GDPlayerHitBoxObjects2);
{for(var i = 0, len = gdjs.L1Code.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.L1Code.GDPlayerHitBoxObjects2[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)),gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) - (gdjs.L1Code.GDPlayerHitBoxObjects2[i].getHeight()));
}
}{runtimeScene.getVariables().getFromIndex(3).setNumber(0);
}{gdjs.evtTools.sound.playSound(runtimeScene, "life lost sound.wav", false, 100, 1);
}
{ //Subevents
gdjs.L1Code.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.L1Code.GDPlayerHitBoxObjects2);

gdjs.L1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.L1Code.GDPlayerHitBoxObjects2.length;i<l;++i) {
    if ( gdjs.L1Code.GDPlayerHitBoxObjects2[i].getY() > 1000 ) {
        gdjs.L1Code.condition0IsTrue_0.val = true;
        gdjs.L1Code.GDPlayerHitBoxObjects2[k] = gdjs.L1Code.GDPlayerHitBoxObjects2[i];
        ++k;
    }
}
gdjs.L1Code.GDPlayerHitBoxObjects2.length = k;}if (gdjs.L1Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}}

}


{



}


};gdjs.L1Code.eventsList11 = function(runtimeScene) {

{


gdjs.L1Code.condition0IsTrue_0.val = false;
{
gdjs.L1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.L1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.L1Code.GDPlayerHitBoxObjects1);
{for(var i = 0, len = gdjs.L1Code.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.L1Code.GDPlayerHitBoxObjects1[i].hide();
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.L1Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.L1Code.GDPlayerHitBoxObjects1);
{for(var i = 0, len = gdjs.L1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.L1Code.GDPlayerObjects1[i].setCenterPositionInScene((( gdjs.L1Code.GDPlayerHitBoxObjects1.length === 0 ) ? 0 :gdjs.L1Code.GDPlayerHitBoxObjects1[0].getCenterXInScene()),(( gdjs.L1Code.GDPlayerHitBoxObjects1.length === 0 ) ? 0 :gdjs.L1Code.GDPlayerHitBoxObjects1[0].getCenterYInScene()));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.L1Code.GDPlayerHitBoxObjects1);

gdjs.L1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.L1Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.L1Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.L1Code.condition0IsTrue_0.val = true;
        gdjs.L1Code.GDPlayerHitBoxObjects1[k] = gdjs.L1Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.L1Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs.L1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.L1Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.L1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.L1Code.GDPlayerObjects1[i].setAnimationName("Jumping");
}
}
{ //Subevents
gdjs.L1Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.L1Code.GDPlayerHitBoxObjects1);

gdjs.L1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.L1Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.L1Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.L1Code.condition0IsTrue_0.val = true;
        gdjs.L1Code.GDPlayerHitBoxObjects1[k] = gdjs.L1Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.L1Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs.L1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.L1Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.L1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.L1Code.GDPlayerObjects1[i].setAnimationName("Jumping");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.L1Code.GDPlayerHitBoxObjects1);

gdjs.L1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.L1Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.L1Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.L1Code.condition0IsTrue_0.val = true;
        gdjs.L1Code.GDPlayerHitBoxObjects1[k] = gdjs.L1Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.L1Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs.L1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.L1Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.L1Code.GDPlayerHitBoxObjects1);

gdjs.L1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.L1Code.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.L1Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isOnLadder() ) {
        gdjs.L1Code.condition0IsTrue_0.val = true;
        gdjs.L1Code.GDPlayerHitBoxObjects1[k] = gdjs.L1Code.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.L1Code.GDPlayerHitBoxObjects1.length = k;}if (gdjs.L1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.L1Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.L1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.L1Code.GDPlayerObjects1[i].setAnimationName("Jumping");
}
}}

}


{


gdjs.L1Code.condition0IsTrue_0.val = false;
{
gdjs.L1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.L1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.L1Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.L1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.L1Code.GDPlayerObjects1[i].flipX(true);
}
}}

}


{


gdjs.L1Code.condition0IsTrue_0.val = false;
{
gdjs.L1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.L1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.L1Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.L1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.L1Code.GDPlayerObjects1[i].flipX(false);
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.L1Code.GDPlayerObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.L1Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.L1Code.GDPlayerObjects1[0].getPointX("")), "", 0);
}}

}


{



}


{


gdjs.L1Code.condition0IsTrue_0.val = false;
{
gdjs.L1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.L1Code.condition0IsTrue_0.val) {
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("MovingPlatform"), gdjs.L1Code.GDMovingPlatformObjects1);
{for(var i = 0, len = gdjs.L1Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.L1Code.GDMovingPlatformObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.L1Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.L1Code.GDMovingPlatformObjects1[i].addForce(-(150), 0, 1);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("MovingPlatform"), gdjs.L1Code.GDMovingPlatformObjects1);
{for(var i = 0, len = gdjs.L1Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.L1Code.GDMovingPlatformObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.L1Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.L1Code.GDMovingPlatformObjects1[i].addForce(150, 0, 1);
}
}}

}


{



}


{



}


{


gdjs.L1Code.condition0IsTrue_0.val = false;
{
gdjs.L1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.L1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs.L1Code.GDFlyObjects1);
{for(var i = 0, len = gdjs.L1Code.GDFlyObjects1.length ;i < len;++i) {
    gdjs.L1Code.GDFlyObjects1[i].activateBehavior("PlatformerObject", false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs.L1Code.GDFlyObjects1);
gdjs.copyArray(runtimeScene.getObjects("SlimeWalk"), gdjs.L1Code.GDSlimeWalkObjects1);

gdjs.L1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.L1Code.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( !(gdjs.L1Code.GDSlimeWalkObjects1[i].isCurrentAnimationName("Dead")) ) {
        gdjs.L1Code.condition0IsTrue_0.val = true;
        gdjs.L1Code.GDSlimeWalkObjects1[k] = gdjs.L1Code.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.L1Code.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.L1Code.GDFlyObjects1.length;i<l;++i) {
    if ( !(gdjs.L1Code.GDFlyObjects1[i].isCurrentAnimationName("Dead")) ) {
        gdjs.L1Code.condition0IsTrue_0.val = true;
        gdjs.L1Code.GDFlyObjects1[k] = gdjs.L1Code.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.L1Code.GDFlyObjects1.length = k;}if (gdjs.L1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.L1Code.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs.L1Code.GDFlyObjects1);
gdjs.copyArray(runtimeScene.getObjects("SlimeWalk"), gdjs.L1Code.GDSlimeWalkObjects1);

gdjs.L1Code.condition0IsTrue_0.val = false;
gdjs.L1Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.L1Code.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( gdjs.L1Code.GDSlimeWalkObjects1[i].isCurrentAnimationName("Dead") ) {
        gdjs.L1Code.condition0IsTrue_0.val = true;
        gdjs.L1Code.GDSlimeWalkObjects1[k] = gdjs.L1Code.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.L1Code.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.L1Code.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs.L1Code.GDFlyObjects1[i].isCurrentAnimationName("Dead") ) {
        gdjs.L1Code.condition0IsTrue_0.val = true;
        gdjs.L1Code.GDFlyObjects1[k] = gdjs.L1Code.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.L1Code.GDFlyObjects1.length = k;}if ( gdjs.L1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.L1Code.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( !(gdjs.L1Code.GDSlimeWalkObjects1[i].getBehavior("Tween").isPlaying("FadeOut")) ) {
        gdjs.L1Code.condition1IsTrue_0.val = true;
        gdjs.L1Code.GDSlimeWalkObjects1[k] = gdjs.L1Code.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.L1Code.GDSlimeWalkObjects1.length = k;for(var i = 0, k = 0, l = gdjs.L1Code.GDFlyObjects1.length;i<l;++i) {
    if ( !(gdjs.L1Code.GDFlyObjects1[i].getBehavior("Tween").isPlaying("FadeOut")) ) {
        gdjs.L1Code.condition1IsTrue_0.val = true;
        gdjs.L1Code.GDFlyObjects1[k] = gdjs.L1Code.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.L1Code.GDFlyObjects1.length = k;}}
if (gdjs.L1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.L1Code.GDFlyObjects1 */
/* Reuse gdjs.L1Code.GDSlimeWalkObjects1 */
{for(var i = 0, len = gdjs.L1Code.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.L1Code.GDSlimeWalkObjects1[i].getBehavior("Tween").addObjectOpacityTween("FadeOut", 0, "easeOutQuad", 1500, true);
}
for(var i = 0, len = gdjs.L1Code.GDFlyObjects1.length ;i < len;++i) {
    gdjs.L1Code.GDFlyObjects1[i].getBehavior("Tween").addObjectOpacityTween("FadeOut", 0, "easeOutQuad", 1500, true);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.L1Code.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.L1Code.GDPlayerHitBoxObjects1);

gdjs.L1Code.condition0IsTrue_0.val = false;
gdjs.L1Code.condition1IsTrue_0.val = false;
{
gdjs.L1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.L1Code.mapOfGDgdjs_46L1Code_46GDPlayerHitBoxObjects1Objects, gdjs.L1Code.mapOfGDgdjs_46L1Code_46GDCoinObjects1Objects, false, runtimeScene, false);
}if ( gdjs.L1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.L1Code.GDCoinObjects1.length;i<l;++i) {
    if ( gdjs.L1Code.GDCoinObjects1[i].getOpacity() == 255 ) {
        gdjs.L1Code.condition1IsTrue_0.val = true;
        gdjs.L1Code.GDCoinObjects1[k] = gdjs.L1Code.GDCoinObjects1[i];
        ++k;
    }
}
gdjs.L1Code.GDCoinObjects1.length = k;}}
if (gdjs.L1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.L1Code.GDCoinObjects1 */
{for(var i = 0, len = gdjs.L1Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs.L1Code.GDCoinObjects1[i].setOpacity(254);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "https://resources.gdevelop-app.com/examples/platformer/coin.wav", false, 100, 1);
}{runtimeScene.getVariables().getFromIndex(0).add(100);
}{for(var i = 0, len = gdjs.L1Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs.L1Code.GDCoinObjects1[i].getBehavior("Tween").addObjectOpacityTween("FadeOut", 0, "easeInQuad", 700, true);
}
}{for(var i = 0, len = gdjs.L1Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs.L1Code.GDCoinObjects1[i].getBehavior("Tween").addObjectPositionYTween("MoveUp", (gdjs.L1Code.GDCoinObjects1[i].getPointY("")) - 50, "easeOutQuad", 700, false);
}
}}

}


{


gdjs.L1Code.eventsList6(runtimeScene);
}


{


gdjs.L1Code.eventsList8(runtimeScene);
}


{


gdjs.L1Code.eventsList10(runtimeScene);
}


{


gdjs.L1Code.condition0IsTrue_0.val = false;
{
gdjs.L1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.L1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", false);
}}

}


};

gdjs.L1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.L1Code.GDPlayerObjects1.length = 0;
gdjs.L1Code.GDPlayerObjects2.length = 0;
gdjs.L1Code.GDPlayerObjects3.length = 0;
gdjs.L1Code.GDPlatformObjects1.length = 0;
gdjs.L1Code.GDPlatformObjects2.length = 0;
gdjs.L1Code.GDPlatformObjects3.length = 0;
gdjs.L1Code.GDJumpthruObjects1.length = 0;
gdjs.L1Code.GDJumpthruObjects2.length = 0;
gdjs.L1Code.GDJumpthruObjects3.length = 0;
gdjs.L1Code.GDTiledGrassPlatformObjects1.length = 0;
gdjs.L1Code.GDTiledGrassPlatformObjects2.length = 0;
gdjs.L1Code.GDTiledGrassPlatformObjects3.length = 0;
gdjs.L1Code.GDTiledCastlePlatformObjects1.length = 0;
gdjs.L1Code.GDTiledCastlePlatformObjects2.length = 0;
gdjs.L1Code.GDTiledCastlePlatformObjects3.length = 0;
gdjs.L1Code.GDMovingPlatformObjects1.length = 0;
gdjs.L1Code.GDMovingPlatformObjects2.length = 0;
gdjs.L1Code.GDMovingPlatformObjects3.length = 0;
gdjs.L1Code.GDLadderObjects1.length = 0;
gdjs.L1Code.GDLadderObjects2.length = 0;
gdjs.L1Code.GDLadderObjects3.length = 0;
gdjs.L1Code.GDPlayerHitBoxObjects1.length = 0;
gdjs.L1Code.GDPlayerHitBoxObjects2.length = 0;
gdjs.L1Code.GDPlayerHitBoxObjects3.length = 0;
gdjs.L1Code.GDSlimeWalkObjects1.length = 0;
gdjs.L1Code.GDSlimeWalkObjects2.length = 0;
gdjs.L1Code.GDSlimeWalkObjects3.length = 0;
gdjs.L1Code.GDFlyObjects1.length = 0;
gdjs.L1Code.GDFlyObjects2.length = 0;
gdjs.L1Code.GDFlyObjects3.length = 0;
gdjs.L1Code.GDScoreObjects1.length = 0;
gdjs.L1Code.GDScoreObjects2.length = 0;
gdjs.L1Code.GDScoreObjects3.length = 0;
gdjs.L1Code.GDCoinObjects1.length = 0;
gdjs.L1Code.GDCoinObjects2.length = 0;
gdjs.L1Code.GDCoinObjects3.length = 0;
gdjs.L1Code.GDCoinIconObjects1.length = 0;
gdjs.L1Code.GDCoinIconObjects2.length = 0;
gdjs.L1Code.GDCoinIconObjects3.length = 0;
gdjs.L1Code.GDLeftButtonObjects1.length = 0;
gdjs.L1Code.GDLeftButtonObjects2.length = 0;
gdjs.L1Code.GDLeftButtonObjects3.length = 0;
gdjs.L1Code.GDRightButtonObjects1.length = 0;
gdjs.L1Code.GDRightButtonObjects2.length = 0;
gdjs.L1Code.GDRightButtonObjects3.length = 0;
gdjs.L1Code.GDJumpButtonObjects1.length = 0;
gdjs.L1Code.GDJumpButtonObjects2.length = 0;
gdjs.L1Code.GDJumpButtonObjects3.length = 0;
gdjs.L1Code.GDArrowButtonsBgObjects1.length = 0;
gdjs.L1Code.GDArrowButtonsBgObjects2.length = 0;
gdjs.L1Code.GDArrowButtonsBgObjects3.length = 0;
gdjs.L1Code.GDTopButtonObjects1.length = 0;
gdjs.L1Code.GDTopButtonObjects2.length = 0;
gdjs.L1Code.GDTopButtonObjects3.length = 0;
gdjs.L1Code.GDBottomButtonObjects1.length = 0;
gdjs.L1Code.GDBottomButtonObjects2.length = 0;
gdjs.L1Code.GDBottomButtonObjects3.length = 0;
gdjs.L1Code.GDFadeInObjects1.length = 0;
gdjs.L1Code.GDFadeInObjects2.length = 0;
gdjs.L1Code.GDFadeInObjects3.length = 0;

gdjs.L1Code.eventsList11(runtimeScene);
return;

}

gdjs['L1Code'] = gdjs.L1Code;
