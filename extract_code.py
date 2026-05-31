"""Extract source files from ALL_MY_CODE.md into the project tree."""
import os
import re

ROOT = os.path.dirname(os.path.abspath(__file__))
MD_PATH = os.path.join(ROOT, "ALL_MY_CODE.md")

with open(MD_PATH, encoding="utf-8") as f:
    content = f.read()

pattern = re.compile(
    r"# FILE: (?P<file>[^\n]+)\n# PATH: [^\n]+\n```[^\n]*\n(?P<body>.*?)```",
    re.DOTALL,
)

count = 0
for match in pattern.finditer(content):
    rel_path = match.group("file").strip().lstrip("/")
    if rel_path == ".env":
        continue  # skip secrets; use .env.example instead
    body = match.group("body")
    out_path = os.path.join(ROOT, rel_path.replace("/", os.sep))
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    with open(out_path, "w", encoding="utf-8", newline="\n") as out:
        out.write(body.rstrip("\n") + "\n")
    count += 1
    print(f"Wrote {rel_path}")

print(f"\nExtracted {count} files.")
