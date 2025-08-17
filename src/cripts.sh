#!/bin/bash

# Prompt for module name
read -p "Enter module name (singular, PascalCase recommended): " moduleName

# Convert to lowercase for directories and files
lowerName=$(echo "$moduleName" | tr '[:upper:]' '[:lower:]')

# Create directory structure
mkdir -p "$lowerName"/{entity,module,services,resolver,inputs}

echo "✅ Created directory structure"

# Create files using Nest CLI
cd "$lowerName"

# Generate module
cd module
nest g module "$moduleName" --flat
cd ..

# Generate service
cd services
nest g service "$moduleName" --flat
cd ..

# Generate resolver
cd resolver
nest g resolver "$moduleName" --flat
cd ..

# Create entity file
cd entity
cat > "$lowerName.entity.ts" <<EOF
import { Entity } from 'typeorm';

@Entity()
export class ${moduleName} {}
EOF

# Create input file
cd ../inputs
cat > "$lowerName.input.ts" <<EOF
import { InputType } from '@nestjs/graphql';

@InputType()
export class ${moduleName}Input {}
EOF

echo "✅ Generated all files"

# Return to original directory
cd ../..

echo "
Module structure created successfully!
Path: $(pwd)/$lowerName

Directory structure:
$lowerName/
├── entity/
│   └── $lowerName.entity.ts
├── inputs/
│   └── $lowerName.input.ts
├── module/
│   └── $lowerName.module.ts
├── resolver/
│   └── $lowerName.resolver.ts
└── services/
    └── $lowerName.service.ts
"