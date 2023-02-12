import React from 'react'

export default function Footer

    () {
    return (
        <div>

            <div className=" abc mt-5">

                <footer className="bg-dark text-center text-white">
                    {/* <!-- Grid container --> */}
                    <div className="container p-4 pb-0">
                        {/* <!-- Section: Form --> */}
                        <section className="">
                            <form action="">
                                {/* <!--Grid row--> */}
                                <div className="row d-flex justify-content-center">
                                    {/* <!--Grid column--> */}
                                    <div className="col-auto">
                                        <p className="pt-2">
                                            <strong>Sign up for our newsletter</strong>
                                        </p>
                                    </div>
                                    {/* <!--Grid column-->

<!--Grid column--> */}
                                    <div className="col-md-5 col-12">
                                        {/* <!-- Email input --> */}
                                        <div className="form-outline form-white mb-4">
                                            <input type="email" id="form5Example2" className="form-control" />
                                            <label className="form-label" htmlFor="form5Example2">Email address</label>
                                        </div>
                                    </div>
                                    {/* <!--Grid column-->

<!--Grid column--> */}
                                    <div className="col-auto">
                                        {/* <!-- Submit button --> */}
                                        <button type="submit" className="btn btn-outline-light mb-4">
                                            Subscribe
                                        </button>
                                    </div>
                                    {/* <!--Grid column--> */}
                                </div>
                                {/* <!--Grid row--> */}
                            </form>
                        </section>
                        {/* <!-- Section: Form --> */}
                    </div>
                    {/* <!-- Grid container -->

<!-- Copyright --> */}
                    <div className="text-center p-3">
                        © 2023 Copyright:
                        <a className="text-white text-decoration-none" href="/"> News.com</a>
                    </div>
                    {/* <!-- Copyright --> */}
                </footer>

            </div>
        </div>
    )
}
