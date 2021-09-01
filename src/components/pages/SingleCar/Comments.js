import Button from "react-bootstrap/Button";

const Comments = () => {
    return (
        <section>
            <div class="container">
                <div className="card shadow">
                    <div className="card-body">
                        <div className="row">
                            <div class="col-xs-1" align="center">
                                <h4>Komentari</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Napiši Komentar</h5>
                            <hr />
                            <div class="container">

                                <textarea />

                                <Button>Objavi</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Ime korisnika</h5>
                                <p class="card-text">Njegov Komentar</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Ime Korisnika</h5>
                                <p class="card-text">Njegov komentar</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Comments;