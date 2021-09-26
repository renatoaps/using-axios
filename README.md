# Using Axios to simplify your `CRUD`

![image](https://user-images.githubusercontent.com/39572088/134814714-ac3a4d68-a407-4e70-a954-272446244193.png)

You can try to use:
>/create
>
>/update
>
>/read

So, `axios` made operations more easy to do. let`s see a `GET` example:
##### GET
```
    const [ APIdata, setAPIData] = useState([]);
    
    useEffect(() => {
        axios.get("your_api_url")
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])
```

The `get` method have one param, the `url`.
So you can use `then` to set the data into a `response` object.

`POST` example:
##### POST
```
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const axiosClient = axios.create({
        baseURL: "yourUrl"
      });

    const postdata = () => {
        axiosClient
            .post("/", {
                firstName,
                lastName,
                checkbox
            })
    }
```

We use two parameters in `POST` method, the first one is `url` and the second one, braced by `{}` is the json we wish to send to API.

##### axios.create()

We can use the `axios.create()` if we want a customized client.
this part can be found here:
```
    const axiosClient = axios.create({
        baseURL: "yourUrl"
      });
```
We created a new axios `instance` and set the `baseURL` for our API, eliminating the need to rewrite the url whenever we want to perform a new operation. Pay attention to the first param, `"/"` it's the path we want to invoke.
