
import GenresList from '../constant/GenresList'

const ContentCategory = () => {
	return (
		<div>
			{GenresList.genere.map((item) => (
				<div>
					<h2>{item.name}</h2>
				</div>
			))}
		</div>
	)
}

export default ContentCategory