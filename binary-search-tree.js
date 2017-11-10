function Node(v){
 this.value=val;
 this.left=null;
 this.right=null;
}

function BinarySearchTree()
{
    this.root=null;
}
BinarySearchTree.prototype.push=function(v){

    var root=this.root;
    if(!root)
    {
        this.root=new Node(v);
        return;
    }
    var currentNode=root;
    var newRoot=Node(v);
    while(currentNode)
    {
        if(v<currentNode.value)
        {
            if(!currentNode.left)
            {
                currentNode.left=newRoot;
                break;
            }
            else {
                currentNode=currentNode.left;
            }
        }
        else 
        {
            if(!currentNode.right){
                currentNode.right = newNode;
                break;
             }
             else{
                currentNode = currentNode.right;
             }
        }
    }
}

function bstLookup(node,target)
{
    if(node===undefined) return false;

}