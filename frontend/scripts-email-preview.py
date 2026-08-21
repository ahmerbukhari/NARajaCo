#!/usr/bin/env python3
"""
Renders public/email-template.php with sample data to email-preview.html so the
enquiry email can be reviewed in a browser without PHP or sending anything.

    python3 scripts-email-preview.py && open email-preview.html
"""
import pathlib, re

root = pathlib.Path(__file__).parent
tpl = (root / "public" / "email-template.php").read_text()
html = tpl.split("<<<'HTML'", 1)[1].rsplit("HTML;", 1)[0].strip()

sample = {
    "{{NAME}}": "Imran Sheikh",
    "{{FIRST_NAME}}": "Imran",
    "{{EMAIL}}": "imran.sheikh@zenithtextiles.pk",
    "{{PHONE}}": "+92 300 1234567",
    "{{COMPANY}}": "Zenith Textiles (Pvt) Ltd",
    "{{SERVICE}}": "External Audits",
    "{{MESSAGE}}": ("We are a mid-sized textile exporter looking for a statutory audit "
                    "for FY2026, and would also like advice on transfer pricing "
                    "documentation.<br><br>Could we arrange a call next week?"),
    "{{DATE}}": "21 August 2026 at 14:32",
    "{{IP}}": "203.0.113.42",
}
for token, value in sample.items():
    html = html.replace(token, value)

leftover = re.findall(r"\{\{[A-Z_]+\}\}", html)
if leftover:
    print("WARNING: template tokens with no sample value:", sorted(set(leftover)))

out = root / "email-preview.html"
out.write_text(html)
print(f"wrote {out}")
