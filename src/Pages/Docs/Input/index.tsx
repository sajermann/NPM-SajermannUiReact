import { WhatsappLogo } from 'phosphor-react';
import styles from './styles.module.css';
import Section from '../../../ComponentsInternal/Section';
import { ComponentBlock } from '../../../ComponentsInternal/ComponentBlock';
import { ex1 } from './exs';
import { CodeBlock } from '../../../ComponentsInternal/CodeBlock';
import { Input } from '../../../components/Input';
import { Button } from '../../../components';

export default function InputDocs() {
	return (
		<main>
			<Section heading="Inputs">Componente de input</Section>
			<Section subHeading="Importação">
				<CodeBlock>{`import { Input } from '@sajermann/ui-react';`}</CodeBlock>
			</Section>
			<Section subHeading="Cover">
				É possível criar botões grandes para que o usuário acesse uma categoria
				<ComponentBlock code={ex1}>
					<Input type="email" id="Batata" />

					<Input
						startAttach={
							<div
								style={{
									backgroundColor: 'blue',
									height: '100%',
									alignItems: 'center',
									justifyContent: 'center',
									display: 'flex',
								}}
							>
								http://
							</div>
						}
					/>
					<Input startAttach="http://" />

					<Input
						endAttach={
							<div
								style={{
									backgroundColor: 'blue',
									height: '100%',
									alignItems: 'center',
									justifyContent: 'center',
									display: 'flex',
								}}
							>
								http://
							</div>
						}
					/>
					<Input endAttach=".com" />
					<Input startAttach="http://" endAttach=".com" />
					<Input
						label="Website"
						startAttach="http://"
						endAttach=".com"
						id="mySite"
					/>
					<Input
						label="Website"
						onlyNumbers
						onChange={e => console.log({ e })}
						endContent={
							<Button
								style={{ minWidth: '50px', height: '50px' }}
								colorStyle="Success"
								variant="Outlined"
								type="button"
								endIcon={<WhatsappLogo size={30} />}
							/>
						}
						id="batata"
					/>
				</ComponentBlock>
			</Section>
		</main>
	);
}
