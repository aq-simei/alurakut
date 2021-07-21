import { Box } from "../src/components/Box";
import { MainGrid } from "../src/components/MainGrid";
import { AlurakutMenu, OrkutNostalgicIconSet } from "../src/lib/AlurakutCommons";
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileInteractions";
//const Title = styled.h1`
//  font-size: 50px;
//  color: ${({ theme }) => theme.colors.primary};`

const usuarioInd = "aq-simei";

const pessoasFavoritas = [
  "MatheusSanchez",
  "omariosouto",
  "juunegreiros",
  "peas",
  "maykbrito",
  "BrunaRP",
  "diego3g",
];

function ProfileSidebar(props) {
  return (
    <Box>
      <img
        src={`https://github.com/${props.gitHubUser}.png`}
        alt="Foto de perfil"
      />
    </Box>
  );
}

export default function Home() {
  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSidebar gitHubUser={usuarioInd} />
        </div>

        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box className="title">
            <h1>
              Bem-vindo(a)
            </h1>
            <OrkutNostalgicIconSet />
          </Box>
        </div>

        <div
          className="profileRelationsArea"
          style={{ gridArea: "profileRelationsArea" }}
        >
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade {pessoasFavoritas.length}
            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img
                        src={`https://github.com/${itemAtual}.png`}
                        alt="Foto de usuário"
                      />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                );  
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}
