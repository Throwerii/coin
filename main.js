const newElephant = document.querySelector("main")

let coin = {
    state: 0,
    flip: function() {
        let numRand=Math.floor(Math.random() * 2)
        if(numRand===1){
            this.state=1
        }
        if(numRand===0){
            this.state=0
        }
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function() {
        
        if(this.state===1){
            const resultHead = document.createElement("h1")
            resultHead.append("Heads")
            newElephant.append(resultHead)
        
        
        }
        if(this.state===0){
            const resultTails = document.createElement("h1")
            resultTails.append("Tails")
            newElephant.append(resultTails)
            
        }
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function() {
       
        let image = document.createElement('img');
        if(this.state===1){
            image.src = 'images/coin head.jpg'
        newElephant.append(image)
    }
        if(this.state===0){
            image.src = 'images/coin tail.jpg'
        
    }
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return image;
    }
};
        function display20Flips(){
            for(let i=0;i<20;i++){
                coin.flip()
                coin.toString()
                newElephant.append(coin.toString())
            }
            
        }
        function display20Images(){
            for(let i=0;i<20;i++){
                coin.flip()
                coin.toHTML()
                newElephant.append(coin.toHTML())
            }
        }