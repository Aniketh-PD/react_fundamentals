const Contact = () => {
  return (
    <>
      <h1 className="font-bold text-lg">Contact us</h1>
      <form>
        <input
          className="border border-black p-2 m-2"
          type="text"
          placeholder={"name"}
        />
        <input
          className="border border-black p-2 m-2"
          type="text"
          placeholder={"email"}
        />
        <button className="border border-black bg-gray-50 p-2 m2 rounded">
          Submit
        </button>
      </form>
    </>
  );
};

export default Contact;
