# Resumo IA 

### Neurônios 

Um neurônio artificial é uma unidade básica de processamento de informações em uma rede neural artificial (RNA). Ele é inspirado no neurônio biológico, que é a unidade fundamental do sistema nervoso central dos animais. O neurônio artificial recebe uma ou mais entradas (inputs) que são multiplicadas pelos seus respectivos pesos (weights). Esses pesos são ajustados durante o treinamento da rede, de modo que o neurônio possa produzir a saída (output) desejada para uma determinada entrada.

O neurônio também inclui uma função de ativação (activation function) que é aplicada à soma ponderada das entradas e pesos. Essa função é responsável por determinar se o neurônio deve ou não disparar, ou seja, produzir um sinal de saída. Existem várias funções de ativação comuns, como a função sigmoide, ReLU e tangente hiperbólica.

Em uma rede neural, vários neurônios artificiais são conectados em camadas, formando uma arquitetura de rede neural. As camadas de neurônios artificiais são conectadas por sinapses artificiais, que permitem que as informações fluam entre as camadas.
Em resumo, um neurônio artificial é a unidade básica de processamento em uma RNA, capaz de receber informações de entrada, computar uma soma ponderada e aplicar uma função de ativação para produzir uma saída. Ele é essencial para a construção de redes neurais capazes de resolver problemas complexos de aprendizado de máquina.

- Um neurônio artificial computa uma função linear (z = Wx + b) seguida por uma função de ativação. 
- A função linear combina os valores de entrada (x) com os pesos (W) e o bias (b) do neurônio. 
- A função de ativação aplica uma transformação não linear ao resultado da função linear e determina a saída do neurônio. 
- A função de ativação pode ser escolhida entre diferentes opções, dependendo do problema que se quer resolver. 
- Algumas funções de ativação comuns são sigmoid, tanh e ReLU. 

### PCA 

O PCA é a sigla de Análise de Componentes Principais, um método estatístico que visa simplificar e organizar dados complexos. O PCA (Análise de Componentes Principais) é um método estatístico que transforma um conjunto de dados em um novo conjunto de variáveis ortogonais chamadas componentes principais. Esses componentes principais capturam a maior parte da variância nos dados originais e são ordenados por ordem decrescente de importância. Algumas das principais motivações para usar o PCA são: 

- Redução de dimensionalidade: o PCA é frequentemente usado para reduzir a dimensionalidade de dados de alta dimensionalidade, ajudando a eliminar a redundância e o ruído nos dados, tornando-os mais facilmente interpretáveis e processáveis. Ao escolher um número menor de componentes principais, podemos reduzir o número de variáveis sem perder muita informação.
- Visualização de dados: o PCA é frequentemente usado para visualizar dados em espaços de baixa dimensão. Ele ajuda a destacar padrões e relacionamentos entre variáveis e permite que os dados sejam facilmente plotados em um gráfico bidimensional ou tridimensional. Ao projetar os dados nos primeiros componentes principais, podemos obter uma visão geral dos dados e identificar possíveis agrupamentos ou outliers. 

O PCA é útil para aplicações em problemas reais que envolvem grandes quantidades de dados com muitas variáveis, como: 
- Processamento de imagens: o PCA é frequentemente usado para reduzir a dimensionalidade de imagens de alta resolução, permitindo que sejam facilmente armazenadas e processadas em sistemas com recursos limitados. O PCA transforma as imagens em um conjunto de componentes principais, que são combinações lineares das imagens originais. Os componentes principais que capturam a maior parte da variância podem ser usados para reconstruir as imagens com uma perda mínima de qualidade. 
- Análise de dados financeiros: o PCA é usado para reduzir a dimensionalidade de dados financeiros complexos, como séries temporais de ações, ajudando a destacar as tendências e identificar oportunidades de investimento. O PCA transforma os dados financeiros em um conjunto de componentes principais, que são combinações lineares dos dados originais. Os componentes principais que capturam a maior parte da variância podem ser usados para analisar os fatores que afetam o mercado e as correlações entre diferentes ativos. 
- Análise de dados genômicos: o PCA é usado para analisar e visualizar grandes conjuntos de dados genômicos, ajudando a identificar padrões e relacionamentos entre genes. O PCA transforma os dados genômicos em um conjunto de componentes principais, que são combinações lineares dos dados originais. Os componentes principais que capturam a maior parte da variância podem ser usados para agrupar os genes com base em sua similaridade e explorar as diferenças entre grupos de genes. 


### K-means 

K-means é um algoritmo de aprendizado não supervisionado que visa particionar um conjunto de dados em k grupos, onde cada dado pertence ao grupo mais próximo da média (ou centróide) do grupo. Algumas das principais motivações para usar o k-means são: 

- Agrupamento de dados: o k-means pode ajudar a identificar padrões e similaridades nos dados, criando clusters que representam grupos homogêneos. Por exemplo, o k-means pode ser usado para segmentar clientes com base em suas características ou preferências, ou para classificar documentos com base em seus tópicos. 

- Redução de dimensionalidade: o k-means pode ajudar a reduzir a complexidade e o ruído dos dados, eliminando as dimensões que não contribuem para a variância dos dados e mantendo as dimensões que são mais relevantes para os clusters. Por exemplo, o k-means pode ser usado para comprimir imagens, reduzindo o número de cores usadas para representá-las. 

 

O k-means tem várias aplicações em problemas reais, tais como: 

 

- Marketing: o k-means é usado para segmentar clientes em grupos com base em seu comportamento de compra, ajudando as empresas a criar campanhas de marketing direcionadas. Por exemplo, uma empresa pode agrupar seus clientes em grupos de alto, médio e baixo valor, e oferecer diferentes incentivos ou promoções para cada grupo. 

- Reconhecimento de padrões em imagens: o k-means é usado para agrupar pixels em uma imagem com base em sua cor ou intensidade, ajudando a identificar objetos ou padrões em uma imagem. Por exemplo, uma imagem pode ser dividida em regiões de fundo e primeiro plano, ou em regiões que correspondem a diferentes objetos ou formas. 

- Classificação de documentos: o k-means é usado para agrupar documentos semelhantes em clusters, ajudando a classificar e organizar grandes conjuntos de dados textuais. Por exemplo, uma coleção de notícias pode ser agrupada em categorias como esportes, política, economia, etc., ou uma biblioteca digital pode ser agrupada em temas como literatura, história, ciência, etc. 
 
 
 ### Taxa de Falsos Positivos (TFP) e a Taxa de Falsos Negativos (TFN)

Para comparar diferentes algoritmos de detecção de anomalias em aeronaves, podemos usar dois critérios principais: economia e segurança. A economia se refere ao equilíbrio entre o custo de manutenção preventiva e corretiva, enquanto a segurança se refere à capacidade de evitar falhas graves na aeronave. Assim, um bom algoritmo deve minimizar os falsos-negativos e os falsos-positivos, ou seja, identificar corretamente as anomalias e evitar alarmes desnecessários.

Para calcular a taxa de falsos positivos (TFP) e a taxa de falsos negativos (TFN), podemos usar as seguintes fórmulas:

- TFP = número de falsos positivos / (número de verdadeiros negativos + número de falsos positivos)

- TFN = número de falsos negativos / (número de verdadeiros positivos + número de falsos negativos)

Para o Algoritmo A, a TFP é de 10/(verdadeiros negativos + 10) e a TFN é de 40/(verdadeiros positivos + 40). Para o Algoritmo B, a TFP é de 42/(verdadeiros negativos + 42) e a TFN é de 8/(verdadeiros positivos + 8).

Não temos informações sobre o número de verdadeiros positivos e negativos, então não podemos calcular as taxas de verdadeiros positivos e negativos ou a acurácia dos algoritmos. No entanto, podemos comparar as TFPs e TFNs dos dois algoritmos.

Em termos de economia na manutenção da aeronave, o melhor algoritmo seria aquele com menor número de falsos negativos, ou seja, aquele que detecta com mais precisão as anomalias. Portanto, o Algoritmo A é melhor nesse aspecto, pois apresentou menor número de falsos negativos.

Em termos de segurança para os usuários da aeronave, o melhor algoritmo seria aquele com menor número de falsos positivos, ou seja, aquele que não gera muitos alarmes falsos. Portanto, o Algoritmo B é melhor nesse aspecto, pois apresentou menor número de falsos positivos.

Um alto número de falsos-positivos implica em um alto número de alarmes falsos, o que pode levar a uma diminuição da confiança no algoritmo e a um aumento dos custos de manutenção preventiva. Já um alto número de falsos-negativos implica em anomalias não detectadas, o que pode levar a uma falha ou acidente da aeronave, resultando em perdas financeiras e humanas.

### Overfitting e underfitting 

Overfitting e underfitting são dois problemas comuns no treinamento de redes neurais artificiais (RNAs).

Overfitting ocorre quando a RNA se ajusta muito bem aos dados de treinamento, chegando a decorar o conjunto de dados, mas apresenta baixa capacidade de generalização para novos dados. Em outras palavras, a RNA se adapta muito bem aos exemplos de treinamento, mas não consegue capturar padrões gerais que possam ser aplicados a dados desconhecidos. Isso ocorre porque a RNA aprende ruídos e características irrelevantes do conjunto de dados de treinamento, em vez de padrões gerais.

Underfitting, por outro lado, ocorre quando a RNA não é capaz de capturar bem os padrões presentes no conjunto de dados de treinamento. A RNA apresenta baixo desempenho tanto no conjunto de treinamento quanto no conjunto de validação e, portanto, não consegue generalizar para novos dados.

Algumas arquiteturas que poderiam ter problemas de overfitting e underfitting incluem redes totalmente conectadas (Fully Connected Networks), redes neurais convolucionais (Convolutional Neural Networks), e redes neurais recorrentes (Recurrent Neural Networks).

Para resolver o problema de overfitting, existem várias técnicas, como:

Regularização: adicionar termos de regularização à função de custo da RNA para penalizar pesos grandes e evitar overfitting. Exemplos de técnicas de regularização incluem L1 e L2 regularization, Dropout e Early Stopping.
Data Augmentation: gerar novos exemplos de treinamento a partir dos exemplos existentes, adicionando distorções, rotações, zoom e outros tipos de transformações.
Redução da complexidade da RNA: reduzir a quantidade de camadas e neurônios da RNA ou aplicar técnicas como a compressão de parâmetros.
Para resolver o problema de underfitting, as principais soluções incluem:

Aumento da complexidade da RNA: aumentar o número de camadas e neurônios na RNA ou usar arquiteturas mais complexas.
Melhorar a qualidade dos dados de treinamento: aumentar a quantidade de dados disponíveis para treinamento ou melhorar a qualidade dos dados existentes, removendo dados duplicados, outliers ou dados mal rotulados.
Reduzir a regularização: reduzir a intensidade dos termos de regularização ou eliminá-los completamente, se necessário.
Em resumo, overfitting e underfitting são problemas comuns no treinamento de RNAs, mas podem ser solucionados com técnicas específicas de regularização, aumento ou redução da complexidade da RNA, melhoria da qualidade dos dados de treinamento e ajustes na intensidade da regularização.



