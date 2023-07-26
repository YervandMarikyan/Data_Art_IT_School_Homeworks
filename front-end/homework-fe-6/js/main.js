$(function(){
	$('.btn').click(function(){
		$($(this).attr('data-target')).modal('show');
	});

	$('[data-dismiss="modal"]').click(function(){
		$('#' + $(this).closest('.modal').attr('id')).modal('hide');
	});
});

let stateOfMainContent = ``, stateOfSmallContent = ``, mainContent = `
	<div class="container">
	    <hr class="featurette-divider mt-5 mb-5">
		<div class="row featurette">
	      <div class="col-md-7 order-md-2">
	        <h2 class="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span class="text-body-secondary">See for yourself.</span></h2>
	        <p class="lead">Another featurette? Of course. More placeholder main-content here to give you an idea of how this layout would work with some actual real-world main-content in place.</p>
	      </div>
	      <div class="col-md-5 order-md-1">
	        <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="img/nature-3.jpg" alt="500x500">
	      </div>
	    </div>
	    <hr class="featurette-divider mt-5 mb-5">
	    <div class="row featurette">
	      <div class="col-md-7">
	        <h2 class="featurette-heading fw-normal lh-1">And lastly, this one. <span class="text-body-secondary">Checkmate.</span></h2>
	        <p class="lead">And yes, this is the last block of representative placeholder main-content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual main-content. Your main-content.</p>
	      </div>
	      <div class="col-md-5">
	        <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="img/nature-4.jpg" alt="500x500">
	      </div>
	    </div>
	    <hr class="featurette-divider mt-5 mb-5">
	</div>
`;

function createState(state) {
	return `${state}`;
}

function createSmallContentState(imgName) {
	return `
		<div class="col">
	      	<div class="card shadow-sm">
	        	<img class="bd-placeholder-img card-img-top" src="img/nature-${imgName}.jpg" alt="alt">
	          	<div class="card-body">
		            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional main-content. This main-content is a little bit longer.</p>
		            <div class="d-flex justify-main-content-between align-items-center">
		              	<div class="btn-group">
		                	<button type="button" class="btn btn-sm btn-outline-secondary" data-target="#modalSheet-1">View</button>
		               		<button type="button" class="btn btn-sm btn-outline-secondary" data-target="#modalSheet-2">Edit</button>
		              	</div>
		              	<small class="text-body-secondary">9 mins</small>
		            </div>
	          	</div>
	    	</div>
	    </div>
	`;
}

function countOfMainContent(count, state) {
	for (let i = 0; i < count; i++) {
		stateOfMainContent += createState(state);
	}
}

function countOfSmallContent(count) {
	for (let i = 0; i < count; i++) {
		stateOfSmallContent += (i % 2 !== 0) ? createSmallContentState(1) : createSmallContentState(2);
	}
}

countOfMainContent(72, mainContent);
countOfSmallContent(9);

document.querySelector(".main-content").innerHTML = stateOfMainContent;
document.querySelector(".small-content").innerHTML = stateOfSmallContent;