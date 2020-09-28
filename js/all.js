// 底下是vue的data
var app = new Vue({
    el: "#LearnEnglish",
    data: {
        vocalbulary: '',
        partofspeech: '',
        meaning: '',
        EnglishList: [],
        isfavorites: false
    },
    created() {
        const getEnglishList = JSON.parse(localStorage.getItem('EnglishList'))
        this.EnglishList = getEnglishList || []
    },
    methods: {
        addEnglishList() {
            const vm = this
            const timestamp = Math.floor(Date.now())
            if (vm.vocalbulary.trim() !== '' && vm.partofspeech.trim() !== '' && vm.meaning.trim() !== '') {
                vm.EnglishList.push({
                    vocalbulary: vm.vocalbulary,
                    partofspeech: vm.partofspeech,
                    meaning: vm.meaning,
                    id: timestamp,
                    isfavorites: false,
                    important: ''
                })
                vm.vocalbulary = ''
                vm.partofspeech = ''
                vm.meaning = ''
                localStorage.setItem('EnglishList', JSON.stringify(vm.EnglishList))
            }
        },
        clearEnglishword(item, key) {
            const vm = this
            vm.EnglishList.forEach(function (arr) {
                if (item.id === arr.id) {
                    vm.EnglishList.splice(key, 1)
                    localStorage.setItem('EnglishList', JSON.stringify(vm.EnglishList))
                }
            })
        },
        updateEnglishList(){
            const vm = this
            localStorage.setItem('EnglishList', JSON.stringify(vm.EnglishList))
        },
        filterEnglishList(){
            const vm = this
            vm.EnglishList.forEach(function(item, key){
                if( item.isfavorites === true ){
                    console.log('321')
                } 
            })
        }
        
    }
})