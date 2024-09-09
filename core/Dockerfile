# Prepara o build do projeto
FROM maven:3.8.4-openjdk-17 AS build

WORKDIR /app

COPY pom.xml .
COPY src ./src

RUN mvn clean package -DskipTests

# Prepara a imagem final
FROM openjdk:17-jdk-alpine

WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

#Expõe a porta 8080
EXPOSE 8080

# Executa o comando para rodar a aplicação
# CMD ["java", "-jar", "app.jar"] -- Outra forma de executar a aplicação.
ENTRYPOINT ["java", "-jar", "app.jar"]