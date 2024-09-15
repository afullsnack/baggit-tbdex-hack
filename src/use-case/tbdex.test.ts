// TODO: test the TBDex flow with the required libraries
// DHT method DID
import { DidDht, type BearerDid } from '@web5/dids';
import { Offering, TbdexHttpClient } from "@tbdex/http-client";
import { describe, test } from "bun:test";
import { HttpClient, HttpClientRequest, HttpClientResponse } from '@effect/platform';
import { Effect, Console } from 'effect';


describe("Create and update DID", () => {

  let userDID: BearerDid;
  test.skip("it should create DID", async () => {
    userDID = await DidDht.create();
    console.log(userDID?.uri, ":::Users did documents");
    console.log((await userDID.export()).uri, ":::exported DID");
    console.log(userDID.document.service, ":::DID services");
  });


  test("it should get offerings from test PFI", async () => {
    const pfiDid = 'did:dht:3fkz5ssfxbriwks3iy5nwys3q5kyx64ettp9wfn1yfekfkiguj1y';
    const pfiDid2 = 'did:dht:3fkz5ssfxbriwks3iy5nwys3q5kyx64ettp9wfn1yfekfkiguj1y';


    const pfiServiceEndpoint = await TbdexHttpClient.getPfiServiceEndpoint(pfiDid2);
    // const pfiServiceEndpoint = await TbdexHttpClient.getOfferings({pfiDid: pfiDid2});

    const result = await HttpClientRequest.get(`${pfiServiceEndpoint}/offerings`).pipe(
      HttpClientRequest.acceptJson,
      HttpClientRequest.setHeader("Content-type", "application/json charset=UTF-8;"),
      HttpClient.fetchOk,
      // Effect.andThen(HttpClientResponse.schemaBodyJson(Offering)),
      HttpClientResponse.json,
      Effect.andThen((response) => response as unknown as { data: Offering[] }),
      Effect.tap(Console.log),
      Effect.tap((response) => Console.log(response.data[0]?.data?.payin, "::::Offering payout default"))
    ).pipe(
      Effect.runPromise
    )


    // const offerings = await TbdexHttpClient.getOfferings({
    //   pfiDid: pfiDid2,
    // });

    // console.log(offerings, ":::offerings from PFI");
  })
})
