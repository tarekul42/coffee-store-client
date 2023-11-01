const AddCoffee = () => {

    const handleAddCoffee = event =>{
        event.preventDefault();
        
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        console.log(name, quantity, supplier, taste, category, details, photo);

    };

    return (
        <div className="bg-[#F4F3F0] p-20 text-black">
            <h2 className="text-3xl font-extrabold">Add a Coffee</h2>
            <form onSubmit={handleAddCoffee}>
                {/* form name and quantity row */}
                <div className="md:flex mb-4 gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                    </div>
                </div>
                {/* form supplier and taste row */}
                <div className="md:flex mb-4 gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier Name</span>
                        </label>
                        <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" />
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex mb-4 gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                    </div>
                </div>
                {/* form photo url row */}
                <div className="mb-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                    </div>
                </div>
                {/* submit button here */}
                <input type="submit" className="btn btn-block mt-4" value="Add Coffee" />
            </form>
        </div>
    );
};

export default AddCoffee;