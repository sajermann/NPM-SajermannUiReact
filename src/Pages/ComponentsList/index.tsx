import { useNavigate } from 'react-router-dom';
import { OptionButton } from '../../components/OptionButton';
import { useDarkMode } from '../../Hooks/DarkMode';
import styles from './styles.module.css';

export default function ComponentList() {
	const { darkMode } = useDarkMode();
	const navigate = useNavigate();

	function handleGotTo(url: string) {
		navigate(url);
	}

	return (
		<main>
			<p>
				<strong>Lista de Componentes disponíveis</strong>
			</p>
			<p>
				Confira abaixo todos os compoenentes disponíveis para importar e
				utilizar em seu projeto
			</p>

			<div className={styles.options}>
				<OptionButton
					className={`${styles.blocks} ${
						darkMode ? styles.dark : styles.light
					}`}
					onClick={() => handleGotTo('/docs/getting-started')}
				>
					Get Started {`${'>'}`}
				</OptionButton>
				<OptionButton
					className={`${styles.blocks} ${
						darkMode ? styles.dark : styles.light
					}`}
					onClick={() => handleGotTo('/docs/button')}
				>
					Componentes {`${'>'}`}
				</OptionButton>
			</div>
		</main>
	);
}
