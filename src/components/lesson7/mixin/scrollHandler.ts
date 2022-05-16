export default {
    methods:{
        onScrollEnd(){
            console.warn('You must override onScrollEnd methods');
        },
        onScroll(event: any){
            //document.querySelector('.modal-body').scrollTop
            const container = event.target;
            if(container.clientHeight + container.scrollTop >= container.scrollHeight){
                this.onScrollEnd()
                // this.isRulesRead = true;
            }
        }
    }
}