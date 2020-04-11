$.ajax({
  url: "/distr/js/data/promotions.json",
  dataType: "json",
  success: function (promos) {
    promos.forEach((promo) => {
      $(".promo__more-details").hide();
      $("#promotions-grid").append(`

        <li class="list-group-item border-0">
        <div class="card my-account-promo-card">
          <div class="card-body">
            <div class="row justify-content-between align-items-sm-top flex-wrap mx-auto">
              <div class="col-6 col-sm-2 col-xl-1 mb-3 text-center">
                <div class="promotion__icon bg-warning"><span class="fas fa-rocket"></span></div>
              </div>
              <div class="col-12 col-sm-10 col-xl-4 mb-3"><span class="promo-info d-block"><small class="mb-0 promo-info__title">Promotion Name</small></span><span class="d-block">
                  <div class="mb-0 promo-info__title">${promo.promotion_name}</div></span></div>
              <div class="col-12 col-sm-3 col-xl-1 mb-3"><span><small class="mb-0 promo-info__title">Approved</small>
                  <div class="promos__approved">${promo.approved}</div></span></div>
              <div class="col-12 col-sm-3 col-xl-1 mb-3"><span><small class="mb-0 promo-info__title">Pending</small>
                  <div class="promos__pending">${promo.pending}</div></span></div>
              <div class="col-12 col-sm-3 col-xl-2 mb-3"><span><small class="mb-0 promo-info__title">Need Verification</small>
                  <div class="promos__needVerification">${promo.need_verification}</div></span></div>
              <div class="col-12 col-sm-3 col-xl-2 mb-3"><span><small class="mb-0 promo-info__title">Awarded</small>
                  <div class="promos__awarded">${promo.awarded}</div></span></div>
              <div class="col-12 col-sm-3 col-xl-1 text-right"><span><small class="mb-0 promo-info__title"> </small>
                  <div class="promos__awarded"> <a class="promo__more-details-link" href="#">Details</a></div></span></div>
              <div class="col-12 bg-light promo__more-details py-3">              </div>
            </div>
          </div>
        </div>
        </li>
              `);
      promos.forEach((claim) => {
        console.log(claim);

        $(".promo__more-details").append(`<div class="row"> 
        <div class="col-12 enter-sale-form__instructions">
          <div class="form-group">
            <p class="lead enter-sale-form__title">My Claim History</p>
          </div>
        </div>
      </div>
      <div class="row mx-auto">
        <div class="col-12">
          <div class="row justify-content-between mx-auto">
            <div class="col-12 col-md-5"><small class="font-weight-bold d-block">Description</small><small class="mb-0">${claim.description}</small></div>
            <div class="col-12 col-md-2"><small class="font-weight-bold d-block">Goal</small><small> ${claim.claims_goal}</small></div>
            <div class="col-12 col-md-2"><small class="font-weight-bold d-block">Total Sales</small><small>${claim.claims_total_sales}</small></div>
            <div class="col-12 col-md-3"><small class="font-weight-bold d-block">Progress</small>
              <div class="promo-progress-bar"></div>
            </div>
          </div>
        </div>
        <div class="col-12 border-bottom mb-3">
          <ul class="list-group list-group-flush claim-history-grid">
            <li class="list-group-item border-0">
              <div class="row"> 
                <div class="col-6 col-md-2">
                  <p class="mb">Invoice Number</p>
                  <p>${claim.claims.invoice_number}</p>
                </div>
                <div class="col-6 col-md-2">
                  <p class="mb">Product Code</p>
                  <p>${claim.claims.product_code}</p>
                </div>
                <div class="col-6 col-md-2">
                  <p class="mb">Claim Date</p>
                  <p>${claim.claims.claim_date}</p>
                </div>
                <div class="col-6 col-md-2">
                  <p class="mb">Quantity</p>
                  <p>${claim.claims.quantity}</p>
                </div>
                <div class="col-6 col-md-2">
                  <p class="mb">Amount</p>
                  <p>${claim.claims.amount}</p>
                </div>
                <div class="col-6 col-md-2">
                  <p class="mb">Payout</p>
                  <p>${claim.claims.payout}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>`);

        // Show More Details
        $(".promo__more-details-link").click(function () {
          $(this)
            .parent()
            .parent()
            .parent()
            .next(".promo__more-details")
            .slideToggle();
          e.preventDefault();
        });
        // End Claim Loop
      });

      // End Promo Loop
    });
  },
});

// Generate progress bar
$(function () {
  $(".promo-progress-bar").dxLinearGauge({
    scale: {
      startValue: 0,
      endValue: 100,
      tickInterval: 10,
    },

    value: 50,
  });
});

// Generate Claim Grid
