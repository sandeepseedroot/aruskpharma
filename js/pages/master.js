$(document).ready(function () {
    $('.popupCloseButton').click(function () {
        $('.hover_bkgr_fricc').hide("slow");
    });

    //$('#divDiscountOffer').click(function () {
    //    window.location.href = 'UniformHouse/DiscountCoupon.aspx'
    //});

    // $('.hover_bkgr_fricc').show("slow");

    //$.ajax({
    //    type: "POST",
    //    url: "Default.aspx/checkOffer",
    //    data: '',
    //    contentType: "application/json; charset=utf-8",
    //    dataType: "json",
    //    success: function (response) {
    //        console.log(response);
    //        if (response.d == "Y") {
    //            $('.hover_bkgr_fricc').show("slow");
    //        }
    //    },
    //    failure: function (response) {
    //        console.log(response);
    //    }
    //});
});