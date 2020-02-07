// Register Dropdown
$("#register-btn").click(() => {
  if($("#register-btn-dropdown").hasClass("none")) {
    $("#register-btn-dropdown").removeClass("none");
  } else {
    $("#register-btn-dropdown").addClass("none");
  }
});

$(document).click(function(e) {
  if(!$(e.target).closest("#register-btn").length && !$(e.target).closest("#register-btn-dropdown").length) {
    $("#register-btn-dropdown").addClass("none");
  }
});

// User Dropdown
$("#user-btn").click(() => {
  if($("#user-btn-dropdown").hasClass("none")) {
    $("#user-btn-dropdown").removeClass("none");
  } else {
    $("#user-btn-dropdown").addClass("none");
  }
})
  
$(document).click(function(e) {
  if(!$(e.target).closest("#user-btn").length && !$(e.target).closest("#user-btn-dropdown").length) {
    $("#user-btn-dropdown").addClass("none");
  }
})

// Side-Menu
$("#btn-extend-menu-body").click(function() {
  if($(this).attr("data-side-menu") === "open") {
    $(this).attr("data-side-menu", "close");
    $("#side-menu-body").css("width", "auto");
    $("#side-menu-body i").css("margin-right", "0px");
    $("#btn-extend-menu").css("justify-content", "center");
    $("#btn-extend-menu span").addClass("none");
    $("#side-menu-icon-close").addClass("none");
    $("#side-menu-icon-open").removeClass("none");
    $(".side-menu-btngroup-children span").addClass("none");
    $("#side-menu-btngroup li a").css("justify-content", "center");
    $("#stock-list-dropdown").addClass("none");
    $(".final-icon").addClass("none");
    $("#side-menu-body").removeClass("animated fadeIn faster");

  } else {
    $(this).attr("data-side-menu", "open");
    $("#side-menu-body").css("width", "260px");
    $("#side-menu-body i").css("margin-right", "6px");
    $("#btn-extend-menu").css("justify-content", "flex-start");
    $("#btn-extend-menu span").removeClass("none");
    $("#side-menu-icon-close").removeClass("none");
    $("#side-menu-icon-open").addClass("none");
    $(".side-menu-btngroup-children span").removeClass("none");
    $("#side-menu-btngroup li a").css("justify-content", "flex-start");
    $("#final-icon-close").removeClass("none");
    $("#side-menu-body").addClass("animated fadeIn faster");
  }
})

$("#stock-list-item").click(() => {
  if($("#stock-list-dropdown").hasClass("none")) {
    $("#final-icon-close").addClass("none");
    $("#final-icon-open").removeClass("none");
    $("#stock-list-dropdown").removeClass("none");
    $("#stock-list-dropdown").addClass("animated fadeIn faster");
  } else {
    $("#final-icon-close").removeClass("none");
    $("#final-icon-open").addClass("none");
    $("#stock-list-dropdown").addClass("none");
    $("#stock-list-dropdown").removeClass("animated fadeIn faster");
  }
})

// Data-Options

  // Phase Select Item
$("#phase-select").change(function(e) {
  if(e.target.value == "2") {
    $("#input-form-radio").removeClass("none")
  } else {
    $("#input-form-radio").addClass("none")
  }
})

  // Plot Data List
$(".plots-data-list-add-item").each(function(index, item) {
  $(item).click(function(e) {
    let dataAttribute = e.target.dataset;
    let textValue = e.target.innerText;
    let newItem = `<li class='plots-data-list-remove-item' data-plot-selected='${dataAttribute.plotSelected}' id='plots-data-list-remove-item${dataAttribute.plotSelected}'>${textValue}</li>`;
    if($(`#plots-data-list-remove-item${dataAttribute.plotSelected}`).length == 0) {
      $("#plots-data-list-remove-data").append(newItem);

      $(".plots-data-list-remove-item").each(function(index, item) {
        $(item).click(() => {
          $(item).remove();
        });
      })
    }
  })
})

  // Use More Inputs Button
$("#use-more-inputs-btn button").click(() => {
  let useMoreInputsItem = `<div class="use-inputs">
  <div class="input-form use-inputs-selects">
    <label for="use-inputs-select">Insumo</label>
    <select id="use-inputs-select">
      <option value="">Selecionar um insumo</option>
      <option value="1">Item 1</option>
      <option value="2">Item 2</option>
      <option value="3">Item 3</option>
    </select>
  </div>
  <div class="use-inputs-stock">
    <label>Estoque</label>
    <span>1000.0000</span>
  </div>
  <div class="use-inputs-hectare">
    <label>Dose/Hectare</label>
    <a href="">0</a>
  </div>
  <div class="input-form use-inputs-quantities">
    <label for="use-inputs-quantity">QTDE</label>
    <input type="text" id="use-inputs-quantity" value="0.0">
  </div>
  <div class="use-inputs-btn-delete">
    <i class="fas fa-window-close"></i>
  </div>
</div>`;

$("#label-use-inputs").after(useMoreInputsItem);

$(".use-inputs").each(function(index, item) {
  $(".use-inputs-btn-delete").each(function(indexBtn, itemBtn) {
    $(itemBtn).click(function() {
      if(index === indexBtn) {
        $(item).remove();
      }
    })
  })
})
})

// Use Machinery Button
$("#use-machinery-btn button").click(() => {
  let useMachineryItem = `<div class="use-machinery">
  <div class="use-machinery-inner-area-1">
    <div class="input-form use-machinery-selects">
      <select id="use-machinery-select">
        <option value="">Selecionar um maquinário</option>
        <option value="1">Item 1</option>
        <option value="2">Item 2</option>
        <option value="3">Item 3</option>
      </select>
    </div>
    <div class="input-form use-machinery-start-time">
      <input type="text" id="use-machinery-start-time-child" value="0">
      <label for="use-machinery-start-time-child">Hora/Km Inicial</label>
    </div>
    <div class="input-form use-machinery-final-time">
      <input type="text" id="use-machinery-final-time-child" value="0">
      <label for="use-machinery-final-time-child">Hora/Km Final</label>
    </div>
    <div class="use-machinery-btn-delete">
      <i class="fas fa-window-close"></i>
    </div>
  </div>
  <div class="use-machinery-inner-area-2">
    <div class="input-form use-machinery-value-time">
      <input type="text" id="use-machinery-value-time-child" value="0,00">
      <label for="use-machinery-value-time-child">Valor Hora/Km</label>
    </div>
    <div class="input-form use-machinery-bushels">
      <input type="text" id="use-machinery-bushels-child">
      <label for="use-machinery-bushels-child">Alqueires</label>
    </div>
  </div>
</div>`;

$("#label-use-machinery").after(useMachineryItem);

$(".use-machinery").each(function(index, item) {
  $(".use-machinery-btn-delete").each(function(indexBtn, itemBtn) {
    $(itemBtn).click(function() {
      if(index === indexBtn) {
        $(item).remove();
      }
    })
  })
})
})

// Use Labor Button
$("#use-labor-btn button").click(() => {
  let useLaborItem = `<div class="use-labor">
  <div class="use-labor-inner-area-1">
    <div class="input-form use-labor-selects">
      <select id="use-machinery-select">
        <option value="">Selecionar uma mão de obra</option>
        <option value="1">Item 1</option>
        <option value="2">Item 2</option>
        <option value="3">Item 3</option>
      </select>
    </div>
    <div class="input-form use-labor-start-time-selects">
      <label>Hora Inicial</label>
      <select id="use-labor-select-start-time-hour">
        <option value="00">00</option>
        <option value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
        <option value="04">04</option>
        <option value="05">05</option>
        <option value="06">06</option>
        <option value="07">07</option>
        <option value="08">08</option>
        <option value="09">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
      </select>
      <span>:</span>
      <select id="use-labor-select-start-time-minute">
        <option value="00">00</option>
        <option value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
        <option value="04">04</option>
        <option value="05">05</option>
        <option value="06">06</option>
        <option value="07">07</option>
        <option value="08">08</option>
        <option value="09">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
      </select>
    </div>
    <div class="input-form use-labor-final-time-selects">
      <label>Hora Final</label>
      <select id="use-labor-select-final-time-hour">
        <option value="00">00</option>
        <option value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
        <option value="04">04</option>
        <option value="05">05</option>
        <option value="06">06</option>
        <option value="07">07</option>
        <option value="08">08</option>
        <option value="09">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
      </select>
      <span>:</span>
      <select id="use-labor-select-final-time-minute">
        <option value="00">00</option>
        <option value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
        <option value="04">04</option>
        <option value="05">05</option>
        <option value="06">06</option>
        <option value="07">07</option>
        <option value="08">08</option>
        <option value="09">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
      </select>
    </div>
    <div class="use-labor-btn-delete">
      <i class="fas fa-window-close"></i>
    </div>
  </div>
  <div class="use-labor-inner-area-2">
    <div class="input-form use-labor-value">
      <input type="text" id="use-labor-value-child" value="0">
      <label for="use-labor-value-child">Valor</label>
    </div>
    <div class="input-form use-labor-bushels">
      <input type="text" id="use-labor-bushels-child">
      <label for="use-labor-bushels-child">Alqueires</label>
    </div>
  </div>
</div>`;

$("#label-use-labor").after(useLaborItem);

$(".use-labor").each(function(index, item) {
  $(".use-labor-btn-delete").each(function(indexBtn, itemBtn) {
    $(itemBtn).click(function() {
      if(index === indexBtn) {
        $(item).remove();
      }
    })
  })
})
})

const SaveData = () => {
  // Activity Date Input Verification
  if($("#activity-date-input").val() === "") {
    $("#activity-date-input").addClass("input-error");
    if(!$("#activity-date-input-error").length){
      $("#activity-date-input").after("<p class='error-msg' id='activity-date-input-error'>Preencha o campo corretamente</p>");
    }
    $(document).scrollTop(0);
  } else {
    $("#activity-date-input").removeClass("input-error");
    $("#activity-date-input-error").remove();
  }

  // Procedure Select Verification
  if($("#procedure-select").val() === "") {
    $("#procedure-select").addClass("input-error");
    if(!$("#procedure-select-error").length){
      $("#procedure-select").after("<p class='error-msg' id='procedure-select-error'>Escolha um procedimento</p>");
    }
    $(document).scrollTop(0);
  } else {
    $("#procedure-select").removeClass("input-error");
    $("#procedure-select-error").remove();
  }

  // End Date Input Verification
  if($("#end-date-input").val() === "") {
    $("#end-date-input").addClass("input-error");
    if(!$("#end-date-input-error").length){
      $("#end-date-input").after("<p class='error-msg' id='end-date-input-error'>Preencha o campo corretamente</p>");
    }
    $(document).scrollTop(0);
  } else {
    $("#end-date-input").removeClass("input-error");
    $("#end-date-input-error").remove();
  }

  // Harvest Select Verification
  if($("#harvest-select").val() === "") {
    $("#harvest-select").addClass("input-error");
    if(!$("#harvest-select-error").length){
      $("#harvest-select").after("<p class='error-msg' id='harvest-select-error'>Escolha uma safra</p>");
    }
    $(document).scrollTop(0);
  } else {
    $("#harvest-select").removeClass("input-error");
    $("#harvest-select-error").remove();
  }

  // Status Select Verification
  if($("#status-select").val() === "") {
    $("#status-select").addClass("input-error");
    if(!$("#status-select-error").length){
      $("#status-select").after("<p class='error-msg' id='status-select-error'>Selecione um status</p>");
    }
    $(document).scrollTop(0);
  } else {
    $("#status-select").removeClass("input-error");
    $("#status-select-error").remove();
  }

  // Phase Select Verification
  if($("#phase-select").val() === "") {
    $("#phase-select").addClass("input-error");
    if(!$("#phase-select-error").length){
      $("#phase-select").after("<p class='error-msg' id='phase-select-error'>Escolha a fase</p>");
    }
    $(document).scrollTop(0);
  } else {
    $("#phase-select").removeClass("input-error");
    $("#phase-select-error").remove();
  }

  // Plots Data List Verification
  if($("#plots-data-list-remove-data").children().length === 0) {
    if(!$("#plots-data-list-error").length){
      $("#plots-data-list-add-data").after("<p class='error-msg' id='plots-data-list-error'>Escolha pelo menos 1 Talhão</p>");
    }
    $(document).scrollTop(0);
  } else {
    $("#plots-data-list-error").remove();
  }
  
  // Success Message
  if($("#activity-date-input").val() !== "" && $("#procedure-select").val() !== "" && $("#end-date-input").val() !== "" && $("#harvest-select").val() !== "" && $("#status-select").val() !== "" && $("#phase-select").val() !== "" && $("#plots-data-list-remove-data").children().length > 0) {
    alert("O que achou?");
  }
}

$("#btn-save-continue").click(() => {
  SaveData();
});

$("#btn-save").click(() => {
  SaveData();
});