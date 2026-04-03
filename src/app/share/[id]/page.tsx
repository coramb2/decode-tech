"use client";

import { useParams } from "next/navigation";
import { decodeShareData } from "@/lib/share";
import { encodeShareData } from "@/lib/share";
import { posthog } from "@/lib/posthog";
import { useEffect } from "react";

export default function SharePage() {
    const params = useParams();
    const id = params.id as string;
    const data = decodeShareData(id);

    useEffect(() => {
        if (data) {
            posthog.capture("share_link_visited");
        }
        }, []);

    if (!data) {
        return (
            <main className="decode-main">
                <header className="decode-header">
                    <div className="decode-logo">
                        <span className="logo-bracket">[</span>
                        <span className="logo-text">decode</span>
                        <span className="logo-bracket">]</span>
                    </div>
                    <p className="decode-tagline">Tech, explained like someone who gets it.</p>
                </header>
                <div className="error-block">
                    <p>This link doesn&apos;t look right. It may have been shortened or broken in transit.</p>
                    <a href="/" className="decode-btn">Ask your own question!</a>
                </div>
                <style jsx>{`
                    :global(body) {
                        margin: 0;
                        background: #1c1610;
                        color: #e8dfc8;
                        font-family: 'Georgia', 'Times New Roman', serif;
                        min-height: 100vh;
                    }
                    .decode-main {
                        max-width: 720px;
                        margin: 0 auto;
                        padding: 3rem 1.5rem 4rem;
                        min-height: 100vh;
                        display: flex;
                        flex-direction: column;
                        gap: 3rem;
                    }
                    .decode-header { text-align: center; padding-top: 2rem; }
                    .decode-logo {
                        font-family: 'Courier New', monospace;
                        font-size: 2.2rem;
                        font-weight: bold;
                        letter-spacing: 0.15em;
                    }
                    .logo-bracket { color: #c4a245; }
                    .logo-text { color: #e8dfc8; }
                    .decode-tagline {
                        margin: 0.6rem 0 0;
                        font-size: 1rem;
                        color: #a8987c;
                        font-style: italic;
                        letter-spacing: 0.2em;
                    }
                    .error-block {
                        text-align: center;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap: 1.5rem;
                        color: #d4c9b0;
                        font-size: 1rem;
                        line-height: 1.75;
                    }
                    .decode-btn {
                        display: inline-block;
                        background: #4a5f3a;
                        color: #e8dfc8;
                        border: 1px solid #5a7a48;
                        border-radius: 3px;
                        padding: 0.9rem 2rem;
                        font-family: 'Courier New', monospace;
                        font-size: 0.95rem;
                        font-weight: bold;
                        letter-spacing: 0.08em;
                        cursor: pointer;
                        text-transform: uppercase;
                        text-decoration: none;
                    }
                    `}</style>
            </main>
        );
    }

    return (
        <main className="decode-main">
            <header className="decode-header">
                <div className="decode-logo">
                    <span className="logo-bracket">[</span>
                    <span className="logo-text">decode</span>
                    <span className="logo-bracket">]</span>
                </div>
                <p className="decode-tagline">Tech, explained like someone who gets it.</p>
            </header>

            <div className="response-query-echo">
                <span className="echo-label">Someone asked:</span>
                <p className="echo-text">&ldquo;{data.query}&rdquo;</p>
            </div>

            <div className="response-cards">
                <div className="response-card card-what">
                    <div className="card-header">
                        <span className="card-icon">◈</span>
                        <h2 className="card-title">What this is</h2>
                    </div>
                    <p className="card-body">{data.response.what_it_is}</p>
                </div>

                <div className="response-card card-do">
                    <div className="card-header">
                        <span className="card-icon">◎</span>
                        <h2 className="card-title">What you should do</h2>
                    </div>
                    <p className="card-body">{data.response.what_to_do}</p>
                </div>

                <div className="response-card card-watch">
                    <div className="card-header">
                        <span className="card-icon">◬</span>
                        <h2 className="card-title">What to watch out for</h2>
                    </div>
                    <p className="card-body">{data.response.what_to_watch}</p>
                </div>
            </div>

            <div className="share-cta">
                <p className="share-cta-text">Have your own question about technology?</p>
                <a href="/" className="decode-btn">Ask it on Decode!</a>
                <p className="share-cta-sub">No account. Nothing saved. No ads. Ever.</p>
            </div>

            <footer className="decode-footer">
                <p>Built for anyone who has ever felt left behind by tech.</p>
            </footer>

             <style jsx>{`
                :global(body) {
                margin: 0;
                background: #1c1610;
                color: #e8dfc8;
                font-family: 'Georgia', 'Times New Roman', serif;
                min-height: 100vh;
                background-image:
                    radial-gradient(ellipse at 20% 20%, rgba(74, 95, 58, 0.08) 0%, transparent 60%),
                    radial-gradient(ellipse at 80% 80%, rgba(139, 90, 43, 0.08) 0%, transparent 60%);
                }
                .decode-main {
                max-width: 720px;
                margin: 0 auto;
                padding: 3rem 1.5rem 4rem;
                min-height: 100vh;
                display: flex;
                flex-direction: column;
                gap: 2rem;
                }
                .decode-header { text-align: center; padding-top: 2rem; }
                .decode-logo {
                font-family: 'Courier New', monospace;
                font-size: 2.2rem;
                font-weight: bold;
                letter-spacing: 0.15em;
                }
                .logo-bracket { color: #c4a245; }
                .logo-text { color: #e8dfc8; }
                .decode-tagline {
                margin: 0.6rem 0 0;
                font-size: 1rem;
                color: #a8987c;
                font-style: italic;
                letter-spacing: 0.2em;
                }
                .response-query-echo {
                border-left: 3px solid #3d3224;
                padding-left: 1rem;
                }
                .echo-label {
                font-family: 'Courier New', monospace;
                font-size: 0.72rem;
                color: #98906e;
                text-transform: uppercase;
                letter-spacing: 0.08em;
                }
                .echo-text {
                margin: 0.3rem 0 0;
                font-size: 0.9rem;
                color: #a8987c;
                font-style: italic;
                line-height: 1.5;
                }
                .response-cards {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                }
                .response-card {
                background: #251e14;
                border: 1px solid #3d3224;
                border-radius: 3px;
                padding: 1.4rem 1.6rem;
                border-left-width: 3px;
                }
                .card-what  { border-left-color: #4a7a5a; }
                .card-do    { border-left-color: #c4a245; }
                .card-watch { border-left-color: #8b5a2b; }
                .card-header {
                display: flex;
                align-items: center;
                gap: 0.6rem;
                margin-bottom: 0.8rem;
                }
                .card-icon { color: #98906e; font-size: 0.85rem; }
                .card-title {
                font-family: 'Courier New', monospace;
                font-size: 0.78rem;
                font-weight: bold;
                text-transform: uppercase;
                letter-spacing: 0.1em;
                color: #a8987c;
                margin: 0;
                }
                .card-body {
                font-size: 1rem;
                line-height: 1.78;
                color: #d4c9b0;
                margin: 0;
                white-space: pre-wrap;
                }
                .share-cta {
                background: #251e14;
                border: 1px solid #3d3224;
                border-radius: 3px;
                padding: 1.6rem;
                text-align: center;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 1rem;
                }
                .share-cta-text {
                font-size: 1.1rem;
                color: #d4c9b0;
                margin: 0;
                line-height: 1.7;
                }
                .share-cta-sub {
                font-family: 'Courier New', monospace;
                font-size: 0.85rem;
                color: #4a7a5a;
                margin: 0;
                font-weight: bold;
                }
                .decode-btn {
                display: inline-block;
                background: #4a5f3a;
                color: #e8dfc8;
                border: 1px solid #5a7a48;
                border-radius: 3px;
                padding: 0.9rem 2rem;
                font-family: 'Courier New', monospace;
                font-size: 0.95rem;
                font-weight: bold;
                letter-spacing: 0.08em;
                cursor: pointer;
                text-transform: uppercase;
                text-decoration: none;
                transition: background 0.15s ease, transform 0.1s ease;
                }
                .decode-btn:hover {
                background: #5a7a48;
                transform: translateY(-1px);
                }
                .decode-footer {
                margin-top: auto;
                text-align: center;
                padding-top: 2rem;
                border-top: 1px solid #2a2218;
                }
                .decode-footer p {
                font-size: 1rem;
                color: #98906e;
                font-style: italic;
                margin: 0;
                }
                @media (max-width: 480px) {
                .decode-main { padding: 2rem 1rem 3rem; }
                .decode-logo { font-size: 1.8rem; }
                }
            `}</style>
        </main>
    );

}