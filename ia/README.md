# Resumo IA 

### Neurônios 
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
 
