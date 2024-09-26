function Search() {
    return (
        <div className="flex items-center justify-center mt-20 mb-4">
            <select className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm">
                <option value="Bife">Bife</option>
                <option value="Galinha">Galinha</option>
                <option value="Lombo">Lombo</option>
                <option value="Porco">Porco</option>
            </select>
            <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm" type="text" placeholder="Procurar Receita" />
            <button className="bg-black hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Pesquisar</button>
        </div>
    )
}

export default Search