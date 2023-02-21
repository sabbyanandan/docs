import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageBanner from "../components/HomepageBanner";
import HomepageFeatures from "../components/HomepageFeatures";


export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Easily write Clarity smart contracts, build apps, and use developer tools for Stacks"
    >
      <main>
        {/* <HomepageBanner /> */}
        <HomepageFeatures />
        {
          //   <div className="gallery">
          //   <div className="sub-heading">
          //     <p>
          //       The Hasura GraphQL Engine makes your data instantly accessible over a real-time GraphQL API, so you can build and
          //       ship modern, performant apps and APIs 10x faster. Hasura connects to your databases, REST and GraphQL endpoints,
          //       and third party APIs to provide a unified, connected, real-time, secured GraphQL API for all of your data.
          //     </p>
          //     <p>
          //       <Link to="https://cloud.hasura.io/signup/?pg=docs&plcmt=body&cta=hasura-cloud&tech=default" target="_blank">
          //         HIRO HIRO HIRO
          //       </Link>{' '}
          //       empowers you to create highly optimized, managed and massively scalable Hasura instances in seconds and includes
          //       extra reliability, monitoring, caching, tracing, security and deployment features. You can also deploy Hasura
          //       manually using our Community Edition Docker image which includes all the core features of GraphQL Engine.
          //       <br />
          //       <br />
          //       HIRO builds on all the features of
          //       the Hasura GraphQL Engine while giving you an enterprise-ready solution - complete with key features like observability,
          //       security, and performance - deployable in minutes. Designed to work with your container platform of choice, Hasura
          //       EE can quickly be set up on AWS ECS, Kubernetes, and Google Cloud Run.
          //     </p>
          //   </div>
          //   <div className="sub-heading">
          //     <h3>Popular Topics</h3>
          //   </div>
          //   <div className="card">
          //     <div className="card-header">
          //       {/* <Basics /> */}
          //       <h4>Basics</h4>
          //     </div>
          //     <p>You can get up and running with Hasura in minutes by following our Getting Started guide.</p>
              
          //       See Getting Started ...
              
          //   </div>
          //   <div className="card">
          //     <div className="card-header">
                
          //       <h4>GraphQL API</h4>
          //     </div>
          //     <p>We provide an instant GraphQL API by generating your GraphQL schema for you based on your data.</p>
              
          //       See Schema ...
              
          //   </div>
          //   <div className="card">
          //     <div className="card-header">
          
          //       <h4>Business Logic</h4>
          //     </div>
          //     <p>
          //       With built-in extensibility, Hasura can handle business logic via Actions, Remote Schemas, and Event Triggers.
          //     </p>
            
          //       See Business Logic ...
            
          //   </div>
          //   <div className="card">
          //     <div className="card-header">
            
          //       <h4>Auth</h4>
          //     </div>
          //     <p>
          //       By using role-based authorization and industry-standard authentication patterns, you can secure your app and your
          //       data with ease.
          //     </p>
            
          //       See Auth ..
              
          //   </div>
          //   <div className="card">
          //     <div className="card-header">
            
          //       <h4>Enterprise</h4>
          //     </div>
          //     <p>Deploy an enterprise-ready instance of Hasura in minutes using your container platform of choice.</p>
            
          //       See Hasura Enterprise ...
              
          //   </div>
          //   <div className="card">
          //     <div className="card-header">
                
          //       <h4>Deployments</h4>
          //     </div>
          //     <p>
          //       Whether you're using Hasura Cloud or one of your favorite one-click services, Hasura's flexibility makes it quick
          //       to deploy.
          //     </p>
              
          //       See Deployment Guides ..
              
          //   </div>
          //   <div className="card">
          //     <div className="card-header">
                
          //       <h4>Learn</h4>
          //     </div>
          //     <p>Our Learn team is hard at work creating courses to help developers learn more about Hasura and GraphQL.</p>
          //     <Link to="https://hasura.io/learn/" target="_blank">
          //       See Courses ...
          //     </Link>
          //   </div>
          // </div>
        
        }
      </main>
    </Layout>
  );
}
