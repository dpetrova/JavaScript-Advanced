/**
 * Created by Daniela on 05/02/2016.
 */
// this program is borrowed from TooScript for learning purposes only
//this program is tested in browser console with HTML file index.html (F12)
var selector = ".birds";

function traverse(selector) {
    var element,
        result,
        child;

    element = document.querySelector(selector); // the element is <article class="birds">...</article>
    result = "";

    function traverseNode(node, spacing) { //node is every single tag
        spacing = spacing || "\t";
        result += spacing + node.nodeName.toLocaleLowerCase() + ": ";

        for (var i = 0; i < node.attributes.length; i++) {
            result += node.attributes[i].name + "=\"" + node.attributes[i].value + "\" ";
        }

        result += "\n";

        for (var i = 0; i < node.childNodes.length; i++) {
            child = node.childNodes[i]; // searching for childNodes

            if (child.nodeType === child.ELEMENT_NODE) { // child.ELEMENT_NODE is a constant indicating that the child note is a tag-element, not a text only
                traverseNode(child, spacing + "\t");
            }
        }
    }

    traverseNode(element, "");

    console.log(result);
}

traverse(selector);




