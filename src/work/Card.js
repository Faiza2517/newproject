
export const Card = () => {
    const [loading, setloading] = useState(true)
    const [Start,setStart]=useState()
    const [Limit,setLimit]=useState()
    const [Data, setData] = useState([])


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then((response) => {
                setData(response.data)
                setloading(false)
            })
            .catch((error) => {
                console.error('error fatching data', error)
            })
    }, [])
    if (loading) {
        return (
        <div class='d-flex justify-content-between'>
            <div class="spinner-border text-success" role="status">
                <span class="sr-only">Loading...</span>
            </div>
</div>
        )

    }


    return (
        <>
            <p className='container fluid'>  <Link to={`/form/id`}>Add post</Link></p>

            
        </>
    )
}
