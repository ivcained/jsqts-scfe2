"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { EAS, SchemaEncoder } from "@ethereum-attestation-service/eas-sdk";
import { Group } from "@visx/group";
import { letterFrequency } from "@visx/mock-data";
import { scaleBand, scaleLinear } from "@visx/scale";
import { Bar } from "@visx/shape";
import { createChart } from "lightweight-charts";
import type { NextPage } from "next";
import DeviceMotion from "react-device-motion";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";
import { useProvider, useSigner } from "~~/utils/wagmi";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  const SquatComponent = () => {
    const [count, setCount] = useState(0);
    const [timeoutId, setTimeoutId] = useState("");
    const easContractAddress = "0x4200000000000000000000000000000000000021";
    const schemaUID = "0x686fb7bbbfe6162ba89543b371e814e6295973a93848b1df22e8db60314a0ae0";
    const signer = useSigner();
    const attest = async () => {
      if (signer == null) return;

      const eas = new EAS(easContractAddress);
      // Signer must be an ethers-like signer.
      await eas.connect(signer);
      // Initialize SchemaEncoder with the schema string
      const schemaEncoder = new SchemaEncoder("uint8 height,uint8 squats");
      const encodedData = schemaEncoder.encodeData([
        { name: "height", value: "0", type: "uint8" },
        { name: "squats", value: "0", type: "uint8" },
      ]);

      const data = letterFrequency;
      // Define the graph dimensions and margins
      const width = 500;
      const height = 500;
      const margin = { top: 20, bottom: 20, left: 20, right: 20 };

      // Then we'll create some bounds
      const xMax = width - margin.left - margin.right;
      const yMax = height - margin.top - margin.bottom;

      // We'll make some helpers to get at the data we want
      const x = d => d.letter;
      const y = d => +d.frequency * 100;

      // And then scale the graph by our data
      const xScale = scaleBand({
        range: [0, xMax],
        round: true,
        domain: data.map(x),
        padding: 0.4,
      });
      const yScale = scaleLinear({
        range: [yMax, 0],
        round: true,
        domain: [0, Math.max(...data.map(y))],
      });

      // Compose together the scale and accessor functions to get point functions
      const compose = (scale, accessor) => data => scale(accessor(data));
      const xPoint = compose(xScale, x);
      const yPoint = compose(yScale, y);

      // Finally we'll embed it all in an SVG
      function BarGraph(props) {
        return (
          <svg width={width} height={height}>
            {data.map((d, i) => {
              const barHeight = yMax - yPoint(d);
              return (
                <Group key={`bar-${i}`}>
                  <Bar
                    x={xPoint(d)}
                    y={yMax - barHeight}
                    height={barHeight}
                    width={xScale.bandwidth()}
                    fill="#C5FFFD"
                  />
                </Group>
              );
            })}
          </svg>
        );
      }

      // ... somewhere else, render it ...
      <BarGraph />;

      /* const tx = await eas.attest({
        schema: schemaUID,
        data: {
          recipient: "0x0000000000000000000000000000000000000000",
          expirationTime: BigInt(0),
          revocable: true, // Be aware that if your schema is not revocable, this MUST be false
          data: encodedData,
        },
      });
      // const newAttestationUID = await tx.wait();
      const offchain = await eas.getOffchain();
      const offchainAttestation = await offchain.signOffchainAttestation(
        {
          recipient: "0x0000000000000000000000000000000000000000",
          // Unix timestamp of when attestation expires. (0 for no expiration)
          expirationTime: BigInt(0),
          // Unix timestamp of current time
          time: BigInt(1671219636),
          revocable: true, // Be aware that if your schema is not revocable, this MUST be false
          nonce: BigInt(0),
          schema: schemaUID,
          refUID: "0x0000000000000000000000000000000000000000000000000000000000000000",
          data: encodedData,
        },
        signer,
      );
      console.log("New attestation UID:", offchainAttestation);
    }; // Gets a default provider (in production use something else like infura/alchemy)

    // Connects an ethers style provider/signingProvider to perform read/write functions.
    // MUST be a signer to do write operations!

    useEffect(() => {
      if (count > 5) {
        // Clear any existing timeout
        if (timeoutId !== null) clearTimeout(timeoutId);

        // Start new timeout that runs the attestation after 500ms.
        const id = setTimeout(() => {
          console.log("Attesting squats count:", count);

          // Call your EAS function here, replacing 'easFunction' with the actual name of your function
          attest();
        }, 500);

        setTimeoutId("test");
      }
    }, [count]);

    const easFunction = () => {
      /* Your attestation code goes here */
      if (signer == null) return console.log("no provider");
      eas.connect(signer);
    };
    function ArticleCard(props: { title: string; href: string; description: string }) {
      return (
        <a
          href={props.href + "?utm_source=next-template"}
          target="_blank"
          className="flex flex-col border border-zinc-800 p-4 rounded-lg hover:bg-zinc-900 transition-colors hover:border-zinc-700"
        >
          <article>
            <h2 className="text-lg font-semibold mb-2">{props.title}</h2>
            <p className="text-sm text-zinc-400">{props.description}</p>
          </article>
        </a>
      );
    }

    return (
      <>
        <button onClick={() => setCount(count + 1)}>Squat!</button>
        <span>Score: {count}</span>
        {/* Assuming ArticleCard is imported elsewhere and it doesn't matter here */}
        <ArticleCard title="How to Play" href="#" description="1 Squat IRL = ‘1 $JSQT’" />
      </>
    );
  };
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">J</span>
            <span className="block text-4xl font-bold">
              <SquatComponent />
            </span>
            <span className="block text-4xl font-bold">SQTS</span>
          </h1>
          <div className="flex justify-center items-center space-x-2">
            <p className="my-2 font-medium">Connected Address:</p>
            <Address address={connectedAddress} />
          </div>
          <p className="text-center text-lg">
            1 Squat irl = 1 $JSQT
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              Win rewards on Base.
            </code>
          </p>
          <p className="text-center text-lg">
            Attest Your Squats{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              = Earn Rewards
            </code>{" "}
            -{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              ETH on Base Chain.
            </code>
          </p>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BugAntIcon className="h-8 w-8 fill-secondary" />
              <p>
                Start{" "}
                <Link href="#" passHref className="link">
                  JSquats
                </Link>{" "}
                Now.
              </p>
              <SquatComponent />
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <p>
                Explore{" "}
                <Link href="/blockexplorer" passHref className="link">
                  Leaderboard
                </Link>{" "}
                Now.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
