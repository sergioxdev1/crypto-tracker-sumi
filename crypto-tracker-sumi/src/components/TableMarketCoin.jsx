import useAxios from '../hooks/useAxios'
import Coin from './Coin';

const TableMarketCoin = () => {
    const { response } = useAxios('coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false');
    //console.log(response);

    return (
        <section className='mt-8'>
            <h1 className='text-xl text-bold mb-2'> Markets </h1>
            {response && response.map(coin => <Coin key={coin.id} coin={coin} />)}
        </section>
    )
}

export default TableMarketCoin