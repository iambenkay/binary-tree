var Branch = function(n){
    this.n = n
    this.left = null
    this.right = null

    this.insert = function(n){
        if (this.n == n){
            return
        } else if (this.n > n) {
            if (this.left){
                this.left.insert(n)
            } else {
                this.left = new Branch(n)
            }
        } else if (this.n < n) {
            if (this.right){
                this.right.insert(n)
            } else {
                this.right = new Branch(n)
            }
        }
    }
    this.search = function(n){
        if (this.n == n){
            return this
        } else if (this.n > n) {
            if (this.left){
                return this.left.search(n)
            } else {
                return `${n} was not found in the Tree`
            }
        } else if (this.n < n){
            if (this.right){
                return this.right.search(n)
            } else {
                return `${n} was not found in the Tree`
            }
        }
    }
}

module.exports = Branch