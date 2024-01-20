// BEVERAGES ADD BUTTON

$(document).ready(function(){
    $('#addbev').click(function(){
        $('#bevtable').append('<tr draggable="true" ondragstart="dragstart()" ondragover="dragover()" id="bevrow"><td><div><input type="checkbox" id="check"></div></td><td><input type="text" name="beverages[]" id="beverages" class="form-control"></td><td><input type="text" name="beverages-count[]" id="beverages-count" class="form-control"></td></tr>')
    });
});

function removebev(){
    document.getElementById("bevrow").remove();
};

// BEVERAGES ADD BUTTON

// BAKERY ADD BUTTON

$(document).ready(function(){
    $('#addbake').click(function(){
        $('#baketable').append('<tr draggable="true"  ondragstart="dragstart()" ondragover="dragover()" id="bakerow"><td><div><input type="checkbox" id="check"></div></td><td><input type="text" name="bakery[]" id="bakery" class="form-control"></td><td><input type="text" name="bakery-count[]" id="bakery-count" class="form-control"></td></tr>')
    });
});

function removebake(){
    document.getElementById("bakerow").remove();
};

// BAKERY ADD BUTTON

//CANNED GOODS ADD BUTTON

$(document).ready(function(){
    $('#addcang').click(function(){
        $('#cangtable').append('<tr draggable="true"  ondragstart="dragstart()" ondragover="dragover()" id="cangrow"><td><div><input type="checkbox" id="check"></div></td><td><input type="text" name="canned-goods[]" id="canned-goods" class="form-control"></td><td><input type="text" name="canned-goods-count[]" id="canned-goods-count" class="form-control"></td></tr>')
    });
});

function removecang(){
    document.getElementById("cangrow").remove();
};

//CANNED GOODS ADD BUTTON

//DAIRY ADD BUTTON

$(document).ready(function(){
    $('#adddairy').click(function(){
        $('#dairytable').append('<tr draggable="true"  ondragstart="dragstart()" ondragover="dragover()" id="dairyrow"><td><div><input type="checkbox" id="check"></div></td><td><input type="text" name="dairy[]" id="dairy" class="form-control"></td><td><input type="text" name="dairy-count[]" id="dairy-count" class="form-control"></td></tr>')
    });
});

function removedairy(){
    document.getElementById("dairyrow").remove();
};

//DAIRY ADD BUTTON

//DRY/BAKING GOODS ADD BUTTON

$(document).ready(function(){
    $('#adddbg').click(function(){
        $('#dbgtable').append('<tr draggable="true"  ondragstart="dragstart()" ondragover="dragover()" id="dbgrow"><td><div><input type="checkbox" id="check"></div></td><td><input type="text" name="dbg[]" id="dbg" class="form-control"></td><td><input type="text" name="dbg-count[]" id="dbg-count" class="form-control"></td></tr>')
    });
});

function removedbg(){
    document.getElementById("dbgrow").remove();
};

//DRY/BAKING GOODS ADD BUTTON

//FROZEN ADD BUTTON

$(document).ready(function(){
    $('#addfrozen').click(function(){
        $('#frozentable').append('<tr draggable="true"  ondragstart="dragstart()" ondragover="dragover()" id="frozenrow"><td><div><input type="checkbox" id="check"></div></td><td><input type="text" name="frozen[]" id="frozen" class="form-control"></td><td><input type="text" name="frozen-count[]" id="frozen-count" class="form-control"></td></tr>')
    });
});

function removefrozen(){
    document.getElementById("frozenrow").remove();
};

//FROZEN ADD BUTTON

//MEAT AND SEAFOOD ADD BUTTON

$(document).ready(function(){
    $('#addmas').click(function(){
        $('#mastable').append('<tr draggable="true"  ondragstart="dragstart()" ondragover="dragover()" id="masrow"><td><div><input type="checkbox" id="check"></div></td><td><input type="text" name="mas[]" id="mas" class="form-control"></td><td><input type="text" name="mas-count[]" id="mas-count" class="form-control"></td></tr>')
    });
});

function removemas(){
    document.getElementById("masrow").remove();
};

//MEAT AND SEAFOOD ADD BUTTON

//PRODUCE ADD BUTTON

$(document).ready(function(){
    $('#addproduce').click(function(){
        $('#producetable').append('<tr draggable="true"  ondragstart="dragstart()" ondragover="dragover()" id="producerow"><td><div><input type="checkbox" id="check"></div></td><td><input type="text" name="produce[]" id="produce" class="form-control"></td><td><input type="text" name="produce-count[]" id="produce-count" class="form-control"></td></tr>')
    });
});

function removeproduce(){
    document.getElementById("producerow").remove();
};

//PRODUCE ADD BUTTON

//PASTA ADD BUTTON

$(document).ready(function(){
    $('#addpasta').click(function(){
        $('#pastatable').append('<tr draggable="true"  ondragstart="dragstart()" ondragover="dragover()" id="producerow"><td><div><input type="checkbox" id="check"></div></td><td><input type="text" name="produce[]" id="produce" class="form-control"></td><td><input type="text" name="produce-count[]" id="produce-count" class="form-control"></td></tr>')
    });
});

function removepasta(){
    document.getElementById("pastarow").remove();
};

//PASTA ADD BUTTON

//SNACKS ADD BUTTON

$(document).ready(function(){
    $('#addsnacks').click(function(){
        $('#snackstable').append('<tr draggable="true"  ondragstart="dragstart()" ondragover="dragover()" id="snacksrow"><td><div><input type="checkbox" id="check"></div></td><td><input type="text" name="snacks[]" id="snacks" class="form-control"></td><td><input type="text" name="snacks-count[]" id="snacks-count" class="form-control"></td></tr>')
    });
});

function removesnacks(){
    document.getElementById("snacksrow").remove();
};

//SNACKS ADD BUTTON

//SPICES/SEASONINGS ADD BUTTON

$(document).ready(function(){
    $('#addss').click(function(){
        $('#sstable').append('<tr draggable="true"  ondragstart="dragstart()" ondragover="dragover()" id="ssrow"><td><div><input type="checkbox" id="check"></div></td><td><input type="text" name="spices[]" id="spices" class="form-control"></td><td><input type="text" name="spices-count[]" id="spices-count" class="form-control"></td></tr>')
    });
});

function removess(){
    document.getElementById("ssrow").remove();
};

//SPICES/SEASONINGS ADD BUTTON

//INTERNATIONAL ADD BUTTON

$(document).ready(function(){
    $('#addint').click(function(){
        $('#inttable').append('<tr draggable="true"  ondragstart="dragstart()" ondragover="dragover()" id="introw"><td><div><input type="checkbox" id="check"></div></td><td><input type="text" name="international[]" id="international" class="form-control"></td><td><input type="text" name="international-count[]" id="international-count" class="form-control"></td></tr>')
    });
});

function removeint(){
    document.getElementById("introw").remove();
};

//INTERNATIONAL ADD BUTTON

//OTHER ADD BUTTON

$(document).ready(function(){
    $('#addother').click(function(){
        $('#othertable').append('<tr draggable="true"  ondragstart="dragstart()" ondragover="dragover()" id="otherrow"><td><div><input type="checkbox" id="check"></div></td><td><input type="text" name="other[]" id="other" class="form-control"></td><td><input type="text" name="other-count[]" id="other-count" class="form-control"></td></tr>')
    });
});

function removeother(){
    document.getElementById("otherrow").remove();
};

//OTHER ADD BUTTON

//DRAG AND DROP 

var draggables;

function dragstart(){  
    draggables = event.target; 
}
function dragover(){
  var e = event;
  e.preventDefault(); 
  
  let children= Array.from(e.target.parentNode.parentNode.children);
  
  if(children.indexOf(e.target.parentNode)>children.indexOf(draggables))
    e.target.parentNode.after(draggables);
  else
    e.target.parentNode.before(draggables);
}