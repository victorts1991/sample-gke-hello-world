# sample-gke-hello-world

This is a project done during classes in the course "KUBERNETES: PODS, SERVICES E CONFIGMAPS" at Alura school,
I had the freedom to run this project on GKE and so the steps below for execution were written based on the GKE structure.

Below is the link to my course completion certificate:

[https://cursos.alura.com.br/user/victorts1991/course/kubernetes-pods-services-configmap/certificate](Certificate Link)

## How to Run

Copie e cole as pastas listadas abaixo na raiz do seu Cluster do GKE:
- db
- sistema

No CLI do seu Cluster do GKE execute os comandos em sequência:


# Criando e expondo o Pod do banco de dados
cd db

# Criando o ConfigMap
kubectl apply -f db-configmap.yaml

# Criando o Pod
kubectl apply -f db-noticias.yaml

# Criando o Service de Load Balancer
kubectl apply -f svc-db-noticias.yaml

# Criando e expondo o Pod de Sistema
cd ../sistema

# Criando o ConfigMap
kubectl apply -f sistema-configmap.yaml

# Criando o Pod
kubectl apply -f sistema-noticias.yaml

# Criando o Service de Load Balancer
kubectl apply -f svc-sistema-noticias.yaml

No menu Services & Ingress, copie o IP da coluna Endpoints do service svc-sistema-noticias

Cole o IP copiado anteriormente no arquivo portal/portal-configmap.yaml no valor do parâmetro IP_SISTEMA, o código deverá ficar semelhante ao abaixo:

apiVersion: v1
kind: ConfigMap
metadata:
  name: portal-configmap
data:
  IP_SISTEMA: http://35.223.47.76

Obs: 
    - O prefixo do IP deverá ser http:// e não https://;
    - Cuidado ao copiar o IP com uma barra no final deixando assim 35.223.47.76/, está barra no final fará com que o portal não consiga acessar a API do sistema: 

Copie e cole a pasta portal na raiz do seu Cluster do GKE:

No CLI do seu Cluster do GKE execute os comandos em sequência:

# Criando e expondo o Pod do banco de dados
cd portal

# Criando o ConfigMap
kubectl apply -f portal-configmap.yaml

# Criando o Pod
kubectl apply -f portal-noticias.yaml

# Criando o Service de Load Balancer
kubectl apply -f svc-portal-noticias.yaml

Após todos os Pods e Services estarem sendo executados, execute os seguintes passos para testar:

1. No menu Services & Ingress, clique no IP da coluna Endpoints do service svc-sistema-noticias;
2. Coloque os dados de acesso abaixo para acessar:
    - Username: admin
    - Password: admin
3. Clique no botão azul "Nova Notícia";
4. Cadastre uma notícia no formulário dentro do modal que aparecer;
5. De volta ao GCP, no menu Services & Ingress, clique no IP da coluna Endpoints do service svc-portal-noticias;
6. Será aberto uma página exibindo a notícia que você cadastrou anteriormente;

