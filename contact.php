<?php include "ref.php" ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Contact Us</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="contact us" name="description">
    <meta content="vexelectronics, telecommunications companies, telecommunications Products" name="keywords">


    <!-- Favicon -->
    <link href="img/logo.png" rel="icon">

    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"> 

    <!-- Icon Font Stylesheet -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

    <!-- Libraries Stylesheet -->
    <!-- <link href="lib/animate/animate.min.css" rel="stylesheet"> -->
    <!-- <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet"> -->
    <!-- <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet"> -->
    <link rel="stylesheet" href="css/cssstyles.css">
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
</head>

<body>
    <div class="container-xxl bg-white p-0">
        <!-- Spinner Start -->
        <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-grow text-primary" style="width: 3rem; height: 3rem;" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <!-- Spinner End -->


        <!-- Navbar & Hero Start -->
        <div class="container-xxl position-relative p-0">
        <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a href="index.html" class="navbar-brand p-0">
                    <img src="img/logo_black.png" alt="Logo">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="fa fa-bars"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto py-0">
                        <a href="index.html" class="nav-item nav-link">Home</a>
                        <a href="about.html" class="nav-item nav-link">About</a>
                        <a href="products.html" class="nav-item nav-link">Products</a>
                        <a href="casestudy.html" class="nav-item nav-link">Case Studies</a>
                        <a href="contact.php" class="nav-item nav-link active">Contact Us</a>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><span
                                    class="h5 text-primary">Login</span></a>
                            <div class="dropdown-menu m-0">
                                <a href="https://vex.vaccrm.com/" class="dropdown-item">Employee Login</a>
                                <a href="https://portal.vexelectronics.com/" class="dropdown-item">Customer login</a>
                                <a href="https://partner.vexelectronics.com/" class="dropdown-item">Partner Login</a>
                            </div>
                        </div>
                  

                    </div>
                    <div class="payment-button">
                        <form class="demo-btn">
                            <a href="http://demo.vaccrm.com/" target="_blank" >Demo</a>
                        </form>
                    </div>
                    <div class="payment-button">
                        <form>
                            <script src="https://checkout.razorpay.com/v1/payment-button.js"
                                data-payment_button_id="pl_LHOoj3iWrDaQ3k" async> </script>
                        </form>
                    </div>
                </div>
            </nav>

            <div class="container-xxl py-5 bg-primary hero-header mb-5">
                <div class="container my-5 py-5 px-lg-5">
                    <div class="row g-5 py-5">
                        <div class="col-12 text-center mt-5">
                            <h1 class="text-white animated zoomIn">Contact Us</h1>
                            <hr class="bg-white mx-auto mt-0" style="width: 90px;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Navbar & Hero End -->
      
        <!-- Contact Start -->
        <div class="container-xxl py-5">
            <div class="container px-lg-5">
                <div class="row justify-content-center">
                    <div class="col-lg-7">
                        <div class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                            <h6 class="position-relative d-inline text-primary ps-4">Contact Us</h6>
                            <h2 class="mt-2">Contact For Any Query</h2>
                        </div>
                        <div class="wow fadeInUp" data-wow-delay="0.3s">
                            <form action="https://vex.vaccrm.com/VAC/api/vexweblead.php" method="get">
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="name" name="lastname" placeholder="Your Name" required>
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="email" class="form-control" id="email"  name="email" placeholder="Your Email" required>
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="subject"  name="company" placeholder="organization" required>
                                            <label for="subject">organization</label>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" name="phone" id="phone" placeholder="Your Number" required >
                                            <label for="subject">Your Number</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <textarea class="form-control"  name="description" rows="5"  placeholder="Leave a message here" id="message" style="height: 150px" required></textarea>
                                            <label for="message">Message</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <input type="hidden" class="form-control" name="ref" id="ref" value="<?php echo $_SESSION['ref']; ?>">
					<button class="btn btn-primary w-100 py-3" value="Sumbit" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                            <?php
		if ($_SERVER['REQUEST_METHOD'] == 'GET') {

            $lastname = $_GET['lastname'];
			$email = $_GET['email'];
			$company = $_GET['company'];
			$phone = $_GET['phone'];
			$description = $_GET['description'];
			$ref=$_SESSION['ref'];
#            file_get_contents("https://vex.vaccrm.com/VAC/api/vexweblead.php?lastname=$lastname&email=$email&company=$comapny&phone=$phone&description=$description&ref=$ref");
                 }
	?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Contact End -->
        

        <!-- Footer Start -->
        <div class="container-fluid bg-primary text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container  px-lg-5">
            <div class="row g-5 d-flex  justify-content-center">
                <div class="section-title position-relative text-center pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <h2 class="mt-2 text-light ">Get In Touch</h2>
                </div>
                <div class="col-md-3 col-lg-4">
                    <i class="fa fa-phone-alt me-3"> <span class="text-light fs-5 px-2"> Contact: </span></i>
                    <br>
                    <div class="phonenum"><a href="tel:044-43512000">044-43512000</a> <br><a
                            href="tel:9884862743">9840862743</a> </div>
                    <i class="fa fa-envelope me-3"> <span class="text-light fs-5 px-2"> Mail: </span> </i>
                    <p>For Sales: sales@vexelectronics.in
                        <br>
                        For Support: support1@vexelectronics.in
                    </p>
                </div>
                <div class="col-md-3 col-lg-4">
                    <i class="fa fa-map-marker-alt me-3"><span class="text-light fs-5 px-2"> Location: </span></i>
                    <br>
                    <p> No:K,2ndFloor ,
                        Senthil Flats, <br> No.59, Burkit Rd,
                        T. Nagar, <br>Chennai-600017 <br>
                        Near RR Dental Hospital.</p>
                    <div class="d-flex pt-2">
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-instagram"></i></a>
                        <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>

                <div class="col-md-3 col-lg-3">
                    <h5 class="text-white mb-4">Popular Link</h5>
                    <a class="btn btn-link" href="./about.html">About Us</a>
                    <a class="btn btn-link" href="./contact.php">Contact Us</a>
                    <a class="btn btn-link" href="./policy.html">Privacy Policy</a>
                    <a class="btn btn-link" href="./Terms&Conditions.html">Terms & Condition</a>
                    <a class="btn btn-link" href="./Refund-policy.html">Refund Policy</a>
                    <a class="btn btn-link" href="./shipping-policy.html">Shipping Policy</a>
                </div>
            </div>
        </div>
        <!-- Footer End -->


        <!-- Back to Top -->
        <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top pt-2"><i class="bi bi-arrow-up"></i></a>
    </div>

    <!-- JavaScript Libraries -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="lib/wow/wow.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>
    <script src="lib/isotope/isotope.pkgd.min.js"></script>
    <script src="lib/lightbox/js/lightbox.min.js"></script>

    <!-- Template Javascript -->
    <script src="js/main.js"></script>
    <script>
	        document.getElementById('ref').value = myGlobalVariable;
    </script>
</body>

</html>
