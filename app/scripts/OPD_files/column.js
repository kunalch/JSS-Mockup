Bahmni.Opd.TreeSelect.Column = function() {
    var Column = function(nodes) {
        this.nodes = nodes;
        this.resetNodes();
    }

    Column.prototype = {
        setFocus: function(node) {
            this.resetNodes();
            this.currentFocus = node;
            node.setFocus()
        },

        getAllSelectedNodes: function(){
            return this.nodes.filter(function(node){
               return node.isSelected();
            });
        },

        resetNodes: function() {
            this.nodes.forEach(function(node) {
                node.focus = false;
            })
        },

        getFocus: function() {
            return this.currentFocus;
        },

        getNodes: function() {
            return this.nodes;
        },

        focusOnNextNode: function() {
            var currentFocusIndex = this.nodes.indexOf(this.currentFocus);
            if(currentFocusIndex < (this.nodes.length - 1)) {
                this.setFocus(this.nodes[currentFocusIndex + 1])
            }
        },

        focusOnPreviousNode: function() {
            var currentFocusIndex = this.nodes.indexOf(this.currentFocus);
            if(currentFocusIndex > 0) {
                this.setFocus(this.nodes[currentFocusIndex - 1])
            }
        },

        toggleSelectionForFocusedNode: function() {
            if(this.currentFocus != null) {
                this.currentFocus.toggleSelection();
            }
        },

        selectFocusedNode: function() {
            if(this.currentFocus != null) {
                this.currentFocus.select();
            }
        },

        setDefaultFocus: function() {
            if (this.nodes.length > 0) {
                this.setFocus(this.nodes[0]);
            }
        },

        getDefaultFocus: function() {
            if (this.nodes.length > 0) {
                return this.nodes[0];
            }
        },

        hasNodes: function() {
            return this.nodes.length > 0;
        },

        hasSelectableItem: function() {
            var hasSelectableNode = false;
            this.nodes.forEach(function(node){
                if(node.isSelectable() && node.isEnabled()){
                    hasSelectableNode = true;
                }
            });
            return hasSelectableNode;
        },

        hasFocus: function() {
            return this.getFocus() != null;
        }
    }

    return Column;
}();
