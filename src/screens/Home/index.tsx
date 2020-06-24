import React, { useState, useEffect, useCallback, FormEvent } from 'react';

import qs from 'qs';

import { Wrapper, Card, Templates, Form, Button } from './styles';

interface TemplateInterface {
  id: string;
  name: string;
  url: string;
  width: number;
  height: number;
  box_count: number;
}
interface TemplateBoxInterface {
  id: string;
  url: string;
  box_count: number;
}
const Home: React.FC = () => {
  const [templates, setTemplates] = useState<TemplateInterface[]>([]);
  const [
    selectedTemplate,
    setSelectedTemplate,
  ] = useState<TemplateBoxInterface | null>(null);
  const [boxes, setBoxes] = useState([]);
  const [generatedMeme, setGeneratedMeme] = useState(undefined);

  useEffect(() => {
    async function loadMemes() {
      const response = await fetch('https://api.imgflip.com/get_memes');
      const { data } = await response.json();
      setTemplates(data.memes);
    }

    loadMemes();
  }, []);

  const handleSelectTemplate = (template: TemplateBoxInterface) => {
    setSelectedTemplate(template);
    setBoxes([]);
  };

  const handleInputChange = (value: string, index: number) => {
    const newValues: any = boxes;
    newValues[index] = value;
    console.log(newValues);
    setBoxes(newValues);
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (selectedTemplate === null) {
      return;
    }
    try {
      const params = qs.stringify({
        template_id: selectedTemplate.id,
        username: 'louzada',
        password: 'louzada01',
        boxes: boxes.map((text) => ({ text })),
      });
      const response = await fetch(
        `https://api.imgflip.com/caption_image?${params}`,
      );
      const { data } = await response.json();

      setGeneratedMeme(data.url);
    } catch (err) {
      console.warn(err);
    }
  }

  const handleReset = useCallback(() => {
    setSelectedTemplate(null);
    setBoxes([]);
    setGeneratedMeme(undefined);
  }, []);

  return (
    <Wrapper>
      <Card>
        {!generatedMeme ? (
          <>
            <h2>Selecione um template</h2>
            <Templates>
              {templates.map((template) => (
                <button
                  key={template.id}
                  type="button"
                  onClick={() => handleSelectTemplate(template)}
                  className={''}
                >
                  <img src={template.url} alt={template.name} />
                </button>
              ))}
            </Templates>

            {selectedTemplate && (
              <Form onSubmit={handleSubmit}>
                <img src={selectedTemplate.url} alt="Imagem Selecionada" />
                <h3>Textos</h3>
                {new Array(selectedTemplate.box_count)
                  .fill('')
                  .map((_, index) => (
                    <input
                      key={String(index)}
                      placeholder={`Texto ${index + 1}`}
                      onChange={(e) => handleInputChange(e.target.value, index)}
                    />
                  ))}

                <Button type="submit">Gerar</Button>
              </Form>
            )}
          </>
        ) : (
          <>
            <img
              className="generatedImage"
              src={generatedMeme}
              alt="Generated Meme"
            />

            <Button onClick={handleReset}>Criar outro meme</Button>
          </>
        )}
      </Card>
    </Wrapper>
  );
};

export default Home;
