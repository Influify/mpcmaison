
$(document).ready(function(){



  $(".taie_size").click(function() {
    const selected_size = $(this).val()
    $(".size_btn").html(" " + selected_size + " ")
    if (selected_size == "50x70") {
      $("#taie_id").val("31926691070029")
    }
    else if (selected_size == "50x80") {
      $("#taie_id").val("31926691102797")
    }

    else if (selected_size == "65x65") {
      $("#taie_id").val("31926691135565")
    }

  });

  $(".add_to_cart").click(function(){
  })

  $("#add_taie_btn").click(function(){
    setTimeout(function(){
      const quantity = $(".quantity").val()
      $("#quantity_btn").html(" " + quantity + " ")
      // ok until here
      $(".taie_quantity").val("" + quantity + "")
      // changed the input value
    }, 300)
  })

  $(".js-change-quantity").click(function(){
    setTimeout(function(){
      const quantity = $(".quantity").val()
      $("#quantity_btn").html(" " + quantity + " ")
      // ok until here
      $(".taie_quantity").val("" + quantity + "")
      // changed the input value
    }, 300)

  })


})

