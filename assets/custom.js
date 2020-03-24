
$(document).ready(function(){

  console.log("Hello Custom")


  $(".taie_size").click(function() {
    const selected_size = $(this).val()
    $(".size_btn").html(" " + selected_size + " ")
    if (selected_size == "50x70") {
      console.log("50x70")
      $("#taie_id").val("31926691070029")
      console.log($("#taie_id").val())
    }
    else if (selected_size == "50x80") {
      console.log("50x80")
      $("#taie_id").val("31926691102797")
      console.log($("#taie_id").val())
    }

    else if (selected_size == "65x65") {
      console.log("65x65")
      $("#taie_id").val("31926691135565")
      console.log($("#taie_id").val())
    }

  });

  $(".add_to_cart").click(function(){
    console.log("Add to cart");
  })

  $("#add_taie_btn").click(function(){
    setTimeout(function(){
      const quantity = $(".quantity").val()
      $("#quantity_btn").html(" " + quantity + " ")
      console.log(quantity)
      // ok until here
      $(".taie_quantity").val("" + quantity + "")
      console.log($(".taie_quantity").val())
      // changed the input value

    }, 500)
  })

  $(".js-change-quantity").click(function(){
    setTimeout(function(){
      const quantity = $(".quantity").val()
      $("#quantity_btn").html(" " + quantity + " ")
      console.log(quantity)
      // ok until here
      $(".taie_quantity").val("" + quantity + "")
      console.log($(".taie_quantity").val())
      // changed the input value

    }, 500)

  })


})

