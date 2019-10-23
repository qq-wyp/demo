var mutations = {  //接收并触发actions委托来的事件,改变state中的数据
    changeState0(state) {
        state.istrue = false;
    },
    changeState1(state) {
        state.istrue = true;
    },
    changeState2(state) {
        state.teacher1 = true;
    },
    changeState2_(state) {
        state.teacher1 = false;
    },
    changeState3(state) {
        state.teacher2 = true;
    },
    changeState3_(state) {
        state.teacher2 = false;
    },
    bannerstate0(state) {
        state.bannerstate = false;
    },
    bannerstate1(state) {
        state.bannerstate = true;
    },
    waterstate0(state) {
        state.waterstate = false;
    },
    waterstate1(state) {
        state.waterstate = true;
    },
    xianshistate0(state) {
        state.xianshi = false;
    },
    xianshistate1(state) {
        state.xianshi = true;
    },
    managestate0(state) {
        state.managestate = false;
    },
    managestate1(state) {
        state.managestate = true;
    },
    managestate0_(state) {
        state.managestate_ = false;
    },
    managestate1_(state) {
        state.managestate_ = true;
    },
    reState0(state) {
        state.reState = false;
    },
    reState1(state) {
        state.reState = true;
    },
    homeState0(state) {
        state.homeState = false;
    },
    homeState1(state) {
        state.homeState = true;
    },
    renState0(state) {
        state.renState = false;
    },
    renState1(state) {
        state.renState = true;
    },
    
    
}
export default mutations