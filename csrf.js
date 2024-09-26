async function getData() {
    console.log("Starting CSRF test...")
    const url = "https://spartan.network-perception.com/login";
    try {
      const response = await fetch(url, {
        method: "POST",
        body: "userid=Tannerviewer%40tannerco.com&password=h7mMnYWyngi8ABwJKXJ3",
        headers: {
          'Cookie': '_xsrf=asdf',
          'X-Xsrftoken': 'asdf'
        }
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.text();
      console.log(json);
    } catch (error) {
      console.log("CSRF TEST ERROR!")
      console.error(error.message);
    }
  }

getData()
